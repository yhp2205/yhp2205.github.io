---
title : "[EDA 리뷰] Google AI4Code"
excerpt : "google AI4Code EDA 리뷰"
categories : ML
tags :
    - Blog
    - Machine learning
    - Data mining
    - google AI4Code
sitemap :
  changefreq : daily
  priority : 1.0
comments: "giscus"
sidebar : 
  nav: "docs"
toc : true
toc_sticky : true
---

이 글은 Kaggle의 Google AI4Code 대회의 [AI4Code - Comprehensive EDA](https://www.kaggle.com/code/andreaspalmgren/ai4code-comprehensive-eda)를 리뷰하기 위해 작성되었습니다.  

### data 전처리 과정
```python
def read_notebook(path):
    return (
        pd.read_json(
            path,
            dtype={'cell_type': 'category', 'source': 'str'})
        .assign(id=path.stem)
        .rename_axis('cell_id')
    )

# Subset of training due to its large size
NUM_TRAIN = 20000
paths_train = list((data_dir / 'train').glob('*.json'))[:NUM_TRAIN]
#paths_train = list((data_dir / 'train').glob('*.json'))

notebooks_train = [read_notebook(path) for path in tqdm(paths_train, desc='Train NBs')]

# Get notebooks
df_notebooks = (pd.concat(notebooks_train).set_index('id', append=True).swaplevel().sort_index(level='id', 
                                                                                               sort_remaining=False)) 

# Get correct order of cells in notebooks                                                                                          
df_orders = pd.read_csv(data_dir/'train_orders.csv', index_col='id')
df_orders = df_orders.squeeze().str.split(" ").explode().to_frame()
df_orders["rank"] = pd.Series([np.arange(x) for x in df_orders.groupby("id").count()["cell_order"]]).explode().to_numpy()

df = df_notebooks.reset_index().merge(df_orders.reset_index().rename(columns = {'cell_order':'cell_id'}), 
                       how='inner', on=['id','cell_id'])

# Get ancestors for notebooks
df_ancestors = pd.read_csv(data_dir / 'train_ancestors.csv', index_col='id')

# Final combined dataframe
df = df.merge(df_ancestors, on="id").sort_values(["id", "rank"]).set_index(["id", "cell_id"])


# Dataframe for count information - Used in EDA
mkd = df[df["cell_type"] == "markdown"].groupby(by=["id"]).count().source
code = df[df["cell_type"] == "code"].groupby(by=["id"]).count().source
df_counts = pd.concat([mkd, code], axis=1)
df_counts.columns = ['markdown_count', 'code_count']
df_counts["tot"] = df_counts.markdown_count+df_counts.code_count
df_counts["ratio"] = df_counts.code_count / df_counts.tot
```
이 포스트에서는 전체적인 데이터의 형태를 파악하기 위해 위와 같은 코드를 사용하여 변수를 추가했습니다. 변수에 대한 설명은 다음과 같습니다.  
![1-1](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/AIEDA/1-1.png?raw=true)  

cell이 mk인지 code인지에 대한 값을 cell_type이라는 변수에 지정하였습니다. 

### DATA Analysis
코드와 마크다운간의 관계를 알아내는 것이 중요한 포인트이기 때문에 cell_type의 비율을 먼저 출력합니다.  
```python
fig1, ax = plt.subplots(figsize=(8,8))
wedges, texts, autotexts = ax.pie([df_counts.code_count.sum(), df_counts.markdown_count.sum()], shadow=True, 
                                  explode=(0, 0.1), labels=["Code", "Markdown"], 
                                  autopct='%1.1f%%', textprops=dict(color="w"), colors=["#008b8b", "#8b0000"])

plt.setp(autotexts, size=15, weight="bold")
ax.legend(wedges, ["Code", "Markdown"],
          loc="center left",
          bbox_to_anchor=(1, 0, 0.5, 1), prop={'size': 13})

ax.set_title("Proportion of Code vs Markdown", size=20);
```
![1-2](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/AIEDA/1-2.png?raw=true)  
mk에 비해 코드의 비율이 높습니다.  

다음으로는 노트북의 셀 수의 길이를 cell의 갯수에 따른 빈도로 히스토그램을 그려 나타내었습니다.  
![1-3](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/AIEDA/1-3.png?raw=true)  
일반적으로 50개 이하의 셀을 지닌 것을 확인할 수 있습니다.  

![1-4](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/AIEDA/1-4.png?raw=true)  
코드와 마크다운 셀의 분포를 다시 비교한 것입니다. 이 분포를 보면 코드와 마크다운의 빈도가 비례하는 관계를 지니고 있다고 추측할 수 있습니다.  

![1-5](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/AIEDA/1-5.png?raw=true)  
가장 짧은 노트북과 긴 노트북에 존재하는 cell들의 갯수를 출력하였습니다. 가장 짧은 노트북에도 최소한 2개의 셀이 존재한다고 생각할 수 있겠습니다.  

![1-6](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/AIEDA/1-6.png?raw=true)  
2개의 셀을 가진 노트북에서 첫번째 셀과 두번째 셀의 형식을 3차원 막대로 출력한 그림과 첫 번째로 어떤 셀이 주로 오는지에 대한 파이차트를 출력한 결과입니다. 해석해보면, 2개의 cell을 가진 노트북들은 대부분 code보다 mk로 먼저 시작하는 것으로 볼 수 있습니다. 그렇다면 일반적으로 mk가 code 셀보다 앞에 오는지에 대한 의문이 있을 수 있는데, 2번째 파이차트를 확인해보면 대부분의 노트북이 마크다운 셀로 시작하는 것을 알 수 있습니다.  

![1-7](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/AIEDA/1-7.png?raw=true)  

2개의 셀을 지닌 노트북은 3차원 plot으로 확인할 수 있었지만, 더 많은 셀을 가진 것들을 3차원으로 그리는 것은 어렵기 때문에 노트북의 길이에 따라 code 셀과 markdown 셀의 분포를 나타내어 보았습니다. 이를 보면 첫 번째 셀에서는 마크다운이 더 많지만 그를 제외한 모든 노트북에서는 code가 더 많은 부분을 차지합니다.  

![1-8](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/AIEDA/1-8.png?raw=true)  
앞선 결과에 이어 code 셀이 각 노트북에서 어느정도의 비중을 차지하는지에 대한 히스토그램을 그려보았습니다. 많은 노트북에서 code 셀이 절반 이상의 비율을 차지하고 있습니다.  

![1-9](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/AIEDA/1-9.png?raw=true)  
![1-10](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/AIEDA/1-10.png?raw=true)  
code 셀과 markdown 셀의 길이를 나타내었습니다. 일반적으로 코드셀보다 마크다운 셀이 길이가 더 짧은 것으로 알 수 있습니다.  


이러한 코드를 통해 마크다운과 코드 셀간의 관계를 조금이나마 파악해보았습니다. 마크다운 셀과 코드 사이의 유의미한 관계를 알아내기 위해서 다른 공부들이 더 필요할 것 같습니다. 더 알아본 후에 다음 포스트로 작성해보도록 하겠습니다. 