var store = [{
        "title": "github.io 블로그 첫 포스팅입니다",
        "excerpt":"새로 블로그를 운영해보도록 하겠습니다.  ","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "/blog/First-post/",
        "teaser": "/assets/images/main.jpg"
      },{
        "title": "[혼공머신러닝] Ch 2. 데이터 다루기(1)",
        "excerpt":"훈련 세트와 테스트 세트 머신러닝 알고리즘 지도학습 : 훈련하기 위한 데이터, 정답이 필요 비지도학습 지도학습에서 데이터를 입력, 정답(결과)을 타깃이라고 하고 입력과 타깃을 합쳐 훈련 데이터라고 하고, 입력 데이터에서 타깃을 결정짓는 것을 특성이라고 합니다. 데이터를 나누어 일부는 머신러닝 알고리즘을 만드는 데에 사용하고, 나머지는 만들어진 알고리즘의 성능을 평가하는 데에 쓰인다는 것은 알고...","categories": ["ML"],
        "tags": ["Blog","Machine learning","Data mining","혼공머신러닝"],
        "url": "/ml/HG2-1/",
        "teaser": "/assets/images/main.jpg"
      },{
        "title": "[Github Blog] favicon 적용하기",
        "excerpt":"Github blog에 favicon 적용하기 favicon은 브라우저의 탭에 위치해있는 이미지를 의미합니다. favicon을 특별히 지정하지 않으면, 다음과 같이 지구본 모양을 띄게 됩니다. favicon을 바꾸는 방법에 대해 알아보도록 하겠습니다. 1. 적절한 이미지 준비하기 저는 다음 이미지로 해보도록 하겠습니다. 2. 이미지 파일 사이트에 업로드하기 realfavicongenerator 사이트에 접속하여 Select your Favicon image를 누르고 파일을 업로드...","categories": ["Blog"],
        "tags": ["Blog","favicon","Github blog","blog custom"],
        "url": "/blog/Blogfavi/",
        "teaser": "/assets/images/main.jpg"
      },{
        "title": "[혼공머신러닝] Ch 2. 데이터 다루기(2)",
        "excerpt":"앞선 머신러닝 알고리즘에서 길이 25센치에 무게 150g의 도미를 빙어로 예측한다는 이상한 결과가 나왔습니다. 이를 보완하기 위해 우선 앞선 데이터를 다시 불러오겠습니다. #fish의 길이와 무게에 대한 데이터 fish_length = [25.4, 26.3, 26.5, 29.0, 29.0, 29.7, 29.7, 30.0, 30.0, 30.7, 31.0, 31.0, 31.5, 32.0, 32.0, 32.0, 33.0, 33.0, 33.5, 33.5, 34.0, 34.0,...","categories": ["ML"],
        "tags": ["Blog","Machine learning","Data mining","혼공머신러닝"],
        "url": "/ml/HG2-2/",
        "teaser": "/assets/images/main.jpg"
      },{
        "title": "[Github Blog] google에서 검색되도록 설정하기",
        "excerpt":"github blog 글이 포털에 검색되도록 설정하려면 각 포탈에 블로그를 등록해주어야 합니다. google에서 글이 검색이 가능하도록 등록해보겠습니다. Github Blog 글이 google에 검색되도록 설정하기 1. sitemap 설정 sitemap을 google에 등록함으로써 주기적인 크롤링을 통해 url을 연결할 수 있습니다. sitemap을 만들어보겠습니다. 블로그의 root 경로(github.io 폴더)에 /sitemap.xml 파일을 만들고 아래의 내용을 복사해서 붙여넣습니다. --- layout:...","categories": ["Blog"],
        "tags": ["Blog","SEO","Github blog","blog custom"],
        "url": "/blog/SEO-set/",
        "teaser": "/assets/images/main.jpg"
      },{
        "title": "[Github Blog] google analytics 적용하기",
        "excerpt":"github blog에 google analytics를 적용해보겠습니다. 저는 github blog에 jekyll minimal-mistakes 테마를 적용하고 있습니다. 1. google analytics 계정 생성하기 우선 google analytics 페이지에 접속해서 계정을 생성합니다. google analytics 페이지에서 측정 시작을 눌러줍니다. 계정 이름을 입력하고 다음으로 넘어갑니다. 속성 이름을 입력하고, 보고 시간대와 통화를 지정해줍니다. 저는 속성 이름에 Github blog를, 시간대와 통화를...","categories": ["Blog"],
        "tags": ["Blog","google analytics","Github blog","blog custom"],
        "url": "/blog/GA-post/",
        "teaser": "/assets/images/main.jpg"
      },{
        "title": "[Github Blog] 깃헙 블로그에 giscus 적용하기",
        "excerpt":"github blog에 giscus를 사용하여 댓글창을 만들어보겠습니다. 보통 깃헙 블로그 댓글창으로는 disqus를 많이 사용하지만, 광고가 많고 무겁다는 평이 많아 비교적 가벼운 giscus를 적용해보려고 합니다. 1. giscus 설치하기 다음 giscus 사이트에 접속합니다. 다음 giscus를 눌러 giscus 댓글창을 사용할 레포지토리에 install 합니다. 저는 이미 설치했기 때문에 configure이라고 뜨지만, 파란 install 버튼을 눌러줍니다. install...","categories": ["Blog"],
        "tags": ["Blog","giscus","Github blog","blog custom"],
        "url": "/blog/coments/",
        "teaser": "/assets/images/main.jpg"
      },{
        "title": "[혼공머신러닝] Ch 3. 회귀 알고리즘과 모델 규제(1)",
        "excerpt":"지도학습 알고리즘은 분류와 회귀로 나눌 수 있습니다. 분류는 앞서 2장에서 했던 것처럼 클래스 중 하나로 분류하는 것이고, 회귀는 임의의 어떤 숫자를 예측하는 것입니다. k-최근접 이웃 분류는 앞서 진행했고, 이번에는 k-최근접 이웃 회귀를 알아보겠습니다. k-최근접 이웃 회귀는 예측하려는 샘플에 가장 가까운 샘플 k개를 선택하여 이웃 수치들의 평균을 구하는 방식입니다. 회귀분석에 쓰일...","categories": ["ML"],
        "tags": ["Blog","Machine learning","Data mining","혼공머신러닝"],
        "url": "/ml/HG3-1/",
        "teaser": "/assets/images/main.jpg"
      },{
        "title": "[혼공머신러닝] Ch 3. 회귀 알고리즘과 모델 규제(2)",
        "excerpt":"앞서 만든 k-최근접 이웃 회귀 모델로 길이 50cm 농어의 무게를 예측해보도록 하겠습니다. #Data load import numpy as np perch_length = np.array([8.4, 13.7, 15.0, 16.2, 17.4, 18.0, 18.7, 19.0, 19.6, 20.0, 21.0, 21.0, 21.0, 21.3, 22.0, 22.0, 22.0, 22.0, 22.0, 22.5, 22.5, 22.7, 23.0, 23.5, 24.0, 24.0, 24.6, 25.0, 25.6, 26.5,...","categories": ["ML"],
        "tags": ["Blog","Machine learning","Data mining","혼공머신러닝"],
        "url": "/ml/HG3-2/",
        "teaser": "/assets/images/main.jpg"
      },{
        "title": "[혼공머신러닝] Ch 3. 회귀 알고리즘과 모델 규제(3)",
        "excerpt":"앞서 훈련했던 모델에서 훈련 세트보다 테스트 세트가 더 점수가 높게 나왔습니다. 이 문제를 해결하기 위해 농어의 길이 뿐만 아니라 농어의 높이와 두께 등의 여러 특성들을 추가로 사용해보겠습니다. 또한 이전에 사용했던 방법인 각 항을 제곱하여 데이터에 추가하는 것과 각 특성을 서로 곱해 새로운 특성을 만드는 방식을 사용합니다. # data load import...","categories": ["ML"],
        "tags": ["Blog","Machine learning","Data mining","혼공머신러닝"],
        "url": "/ml/HG3-3/",
        "teaser": "/assets/images/main.jpg"
      },{
        "title": "[혼공머신러닝] Ch 4. 다양한 분류 알고리즘",
        "excerpt":"로지스틱 회귀 랜덤하게 담긴 생선의 확률을 알아보려고 합니다. 우선 앞서 배웠던 k-최근접 이웃 분류기를 사용하여 구한 이웃 클래스를 토대로 타깃 생선의 확률을 계산해보겠습니다. 먼저 데이터를 준비합니다. import pandas as pd fish = pd.read_csv('https://bit.ly/fish_csv') fish.head() 그리고 target 데이터가 될 Species 열에 어떤 종류가 있는지 판다스의 unique 함수를 사용해서 확인합니다. print(pd.unique(fish['Species'])) [‘Bream’...","categories": ["ML"],
        "tags": ["Blog","Machine learning","Data mining","혼공머신러닝"],
        "url": "/ml/HG4-1/",
        "teaser": "/assets/images/main.jpg"
      },{
        "title": "[혼공머신러닝] Ch 4. 다양한 분류 알고리즘(2)",
        "excerpt":"확률적 경사 하강법  ","categories": ["ML"],
        "tags": ["Blog","Machine learning","Data mining","혼공머신러닝"],
        "url": "/ml/HG4-2/",
        "teaser": "/assets/images/main.jpg"
      }]
