# git 명령어

<a href='https://hackmd.io/@oW_dDxdsRoSpl0M64Tfg2g/ByfwpNJ-K'>깃허브 명령어 참고</a>


* 터미널을 따로 열지 않아도 vs-code나 파이참 개발환경에서 터미널을 열어서 수행하면 됨
* 명령어를 사용하지 않을 경우 소스트리나 깃허브데스크탑 이용

1. 깃허브 레파지토리 생성(New Organization을 이용해 조 이름으로된 저장소 생성

2. 레파지토리 생성 후 맴버를 collaborator로 추가한다.(관리자로 추가 : pull과 push 권한 부여)

3. 환경설정한 최초 프로젝트 파일을 깃허브 레파지토리에 올린다.

4. 깃허브 레파지토리에 최초 파일 올리는 방법

<br/>


  ## git init (깃허브 초기설정) --> 한명이 대표로 셋팅
    # git status (파일의 상태확인)
    # git add . (전체 파일 업로드) ------> 하나의 파일을 올리고 싶은 경우 # git add 파일명
    # git status (파일의 상태확인)
    # git commit -m "프로젝트 시작(커밋 메세지 입력)"
    # git remote add origin 깃헙주소
    # git push -u origin main(or master) : 지금은 깃허브에서 자동으로 생성하는게 main, 예전에는 현재의 main이 master였음
 

  ### <a href="https://www.youtube.com/watch?v=lelVripbt2M&t=597s"><참고영상></a>

<br/>

  ##  깃에 올라가 있는 파일을 받을 때 --> 셋팅한 것을 팀원들이 받을 때
    # git clone 깃헙주소
    # git pull origin 브랜치 이름 ----> 어떤 브랜치의 파일을 받아올 것인지


  ## 수정 후 다시 파일 PUSH 할 때
    # git add . (전체 파일 업로드)
    # git commit -m "프로젝트 시작(커밋 메세지 입력-jieun first commit 등)"
    # git pull origin master : 최신상태를 유지하기 위해 pull 땡겨오기
    # git checkout -b 브랜치 이름 (새로운 브랜치 생성)
    # git push origin 브랜치 이름