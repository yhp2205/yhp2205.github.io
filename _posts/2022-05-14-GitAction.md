---
title : "[Github] 깃허브 메인 페이지에 잔디심기 띄우기"
excerpt : "Github Actions를 사용한 잔디심기 대시보드 만들기"
categories :
    - Github
tags :
    - Github
    - Github actions
sitemap :
  changefreq : daily
  priority : 1.0
comments: "giscus"
sidebar : 
  nav: "docs"
---

오늘은 Github Actions를 사용하여 잔디심기 대시보드를 다음과 같이 만들어보겠습니다.  
![A1](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A1.png?raw=true)

## 1. 잔디심기 대시보드 만들 레포지토리 선택해서 권한 설정
잔디심기 대시보드를 표시할 레포지토리를 정합니다. 저는 깃허브 프로필 페이지에 띄울것이기 때문에 고유 아이디로 된 yhp2205 레포지토리로 결정했습니다.  
  
![A2](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A2.png?raw=true)  
<br/>
레포지토리를 정했으면 그 레포지토리의 권한을 설정하기 위해 settings를 눌러 들어갑니다.  

![A3](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A3.png?raw=true)  
<br/>
settings의 좌측 카테고리에서 ```Actions - General```로 들어가서  

![A4](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A4.png?raw=true)  
<br/>
페이지 하단에 위치한 Workflow permissions를 다음과 같이 설정해줍니다.  

## 2. metrics 기능 fork 해서 가져오기  
[다음 사이트](https://github.com/lowlighter/metrics)에 접속하여 metrics 기능을 fork 해서 가져오겠습니다.  

![A5](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A5.png?raw=true)  
<br/>
이런 페이지가 뜨면 우측 상단의 fork 버튼을 누르고  

![A6](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A6.png?raw=true)  
<br/>
Create fork를 눌러 본인의 깃허브 계정으로 가져옵니다.  

## 3. personal token 생성하기
metrics를 가져왔으니 계정의 token을 생성해보겠습니다.  
<br/>
![A7](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A7.png?raw=true)  
<br/>
다음과 같이 계정의 settings로 들어갑니다. (레포지토리의 settings가 아닌 깃허브 계정의 settings로 들어갑니다)  

![A8](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A8.png?raw=true)  
<br/>
우측 카테고리 제일 하단의 Developer settings를 누릅니다.  

![A9](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A9.png?raw=true)  
<br/>
다음과 같이 ```personal access token - Generate new token```을 눌러줍니다.  

![A10](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A10.png?raw=true)  
<br/>

![A11](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A11.png?raw=true)  
<br/>
note에 token의 이름을 지정해주고, 유효기간을 설정합니다. 90일로 설정했으나 원하는 대로 설정하면 됩니다. 그리고 아래 repo, read::packages, read:org, gist, read:user를 선택한 후에 토큰을 만들어 줍니다.  

![A12](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A12.png?raw=true)  
<br/>
토큰을 성공적으로 생성했을 때 다음과 같은 페이지가 뜨고 빨간 박스로 표시한 아이콘을 눌러 토큰을 복사합니다. 잃어버리면 안되기 때문에 다른 메모장에 적어두셔도 좋습니다!  

## 4. Actions secrets에 token 등록하기
토큰을 만들어 잘 복사해두었다면 다음으로 잔디심기를 올릴 레포지토리에 토큰을 등록해보겠습니다.  
<br/>

![A13](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A13.png?raw=true)  
<br/>
잔디심기 대시보드를 만들 레포지토리에 들어갑니다. 1에서 권한을 설정해 주었던 레포지토리의 ```settings - secrets - actions```를 차례로 눌러 들어가줍니다.  

![A14](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A14.png?raw=true)  
<br/>
```New repository secret```을 눌러 토큰을 등록하겠습니다.  

![A15](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A15.png?raw=true)  
<br/>
다음과 같은 창이 뜨면 토큰의 이름을 작성하고(저는 YOUNGHYUNS_METRICS_TOKEN으로 등록하였습니다), Value 값에 복사해둔 token값을 넣고 Add secret 해줍니다.  

## 5. repo 내에 yml 파일 만들기

깃허브 토큰 등록한 repo 내에 yml 파일을 만들겠습니다.  

![A16](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A16.png?raw=true)  
<br/>
```Actions - set up a workflow yourself```를 누릅니다.  

```
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # 하루에 한 번 씩 빌드 수행
  schedule:
    - cron: '0 1 * * *'

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      - name: [빌드를 수행할 때 표시할 작업명]
        uses: [metrics를 fork한 저장소명]/metrics@latest
        with:
          token: $
          filename: [빌드한 후 생성할 파일명].svg
          base: ""
          plugin_isocalendar: yes
          plugin_isocalendar_duration: full-year
```
다음 코드를 복사해서 붙여넣습니다.  

![A17](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A17.png?raw=true)  
<br/>
다음과 같이 ```activity_metrics_build.yml```로 이름을 지정해주고 앞선 코드에서 표시된 부분을 본인의 repo에 맞게 작성합니다. 하늘색 박스로 표시된 부분에는 전에 등록해준 토큰의 이름을 작성하면 됩니다. 저는 ```YOUNGHYUNS_METRICS_TOKEN``` 으로 지정했기 때문에 그대로 작성하였습니다.  
<br/>
작성이 완료되었다면 우측 상단에 위치한 Start commit 버튼을 눌러 Commit new file을 해줍니다.  

## 6. Workflow 실행하여 svg 파일 생성하기
![A18](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A18.png?raw=true)  
<br/>
commit을 완료하여 yml 파일을 생성했다면 다시 Actions 탭으로 들어갑니다. 그럼 다음과 같이 CI라는 이름의 workflow가 생성된 것을 확인할 수 있습니다. CI를 선택한 후에, 빨간색으로 표시되어 있는 Run Workflow를 눌러 workflow를 실행합니다.  
<br/>
CI가 실행되는 데에는 약 5분정도의 시간이 걸립니다. 주황색 불이 들어와서 실행중임을 알리고 있다면 빌드가 완료될 때까지 기다립니다.  

![A19](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A19.png?raw=true)
<br/>
시간이 지난 후, 초록 표시가 들어오고 빌드가 완료된 것을 알리면, 레포지토리 내에 다음과 같이 svg 파일이 생성된 것을 볼 수 있습니다.  

## 7. 잔디심기 대시보드 게시하기
![A20](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A20.png?raw=true)  
<br/>
마지막으로 동일 레포지토리의 Readme.md 파일에 다음과 같이 작성해줍니다.  

![A21](https://github.com/yhp2205/yhp2205.github.io/blob/main/assets/images/Actions/A21.png?raw=true)  
<br/>
정상적으로 실행되었을 때, 다음과 같이 깃허브 메인 화면에서 잔디심기 보드를 확인할 수 있습니다.  

> 참고한 포스트 [Github Actions를 이용한 잔디심기 대쉬보드 만들기](https://ynkim0.github.io/posts/Github-Actions%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%9E%94%EB%94%94%EC%8B%AC%EA%B8%B0-%EB%8C%80%EC%89%AC%EB%B3%B4%EB%93%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0/)