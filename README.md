# 1. 개발 환경

1. OS: MacOS
2. Runtime: npm@8.3.1 (node@16)
3. 언어: Javascript
4. 사용 라이브러리
    - react, react-dom
    - emotion, sass
    - 라이브러리 사용을 최소화 하기위해 react와 스타일에 관련된 라이브러리만 사용 함
5. 빌드: webpack, babel

# 2. 실행 방법

```markdown
# 루트 디렉토리 기준
cd front
npm i
npm run dev
```

3000번 포트를 사용합니다.

# 3. 프로젝트 구조

- public - 정적 파일을 위한 디렉토리
    - fonts - 글꼴
    - image - 로고와 아이콘 같은 이미지가 있음
    - stylesheets - reset, normalize 등의 css 초기화를 위한 코드와 전체 코드에서 사용되는 공통된 스타일 정의가 있음
- src - 실제 소스코드들이 모여있는 디렉토리
    - apis
    - components
    - hooks - 커스텀 훅(쓰로틀링, 디바운싱)을 작성한 디렉토리
    - layouts
    - pages
    - utils - 숫자에 콤마를 찍는다던지 클레스 목록을 만들어주는 등의 유틸 함수가 있는 디렉토리
- index.html - 엔트리 포인트로 쓰일 html 파일
- index.js - 작성한 코드를 index.html에서 볼수 있도록 해줄 파일
- package.json
- webpack.config.js

# 4. 기능

## 1. 상품 목록 보여주기

- 상품 목록에 관련된 데이터를 서버에 요청하여 사용자에게 보여준다.
    - 단독 상품의 경우 `단독` 이란 글자가 있는 라벨이 표기된다.
    - 세일 상품의 경우 할인율과 기존 가격이 표기된다.
    - 품절 상품의 경우 기본적으로 노출되지 않으며, 필터에서 품절포함 선택 시 추가로 노출된다.
    - 상품 이미지가 없다면 대체 이미지를 보여준다.
    - 상품의 글자수가 2줄이 넘어간다면 넘어가는 글자는 숨기고 생략 기호 처리해주었다.
    - 완전히 중복된 상품이 있다면 생략해준다.
- 스크롤이 목록의 하단까지 내려오면 다음 항목이 노출되는 무한 스크롤로 동작한다.
    - 상품 목록 데이터에 대한 정보를 서버에 요청할 때 중복되지 않도록 한번만 호출한다.
- 필터링 시 화면에 보여지는 데이터가 부족하다면 스크롤에 관계 없이 요청을 해준다.(요구사항과 다른 점)
- 상품 데이터가 없거나 필터링 했을 때 데이터가 남아있지 않다면 검색 결과 없음 화면을 보여준다.

## 2. 상품 목록 필터링하기

- 단독상품, 세일상품, 품절포함 버튼으로 상품 목록을 필터링 할 수 있다.
    - 필터는 토글 기능을 가지고 있고, 활성화 시 목록에 적용된다.
    - 활성화 된 필터 아이템을 클릭하면 해당 필터는 비활성화 된다.
- 검색어를 입력하고 해당 검색어를 입력하면 검색어에 관련된 상품만 필터링 된다.
    - 인풋 박스가 변할때 마다 해당 로직을 실행하지 않고, 입력이 특정 시간동안 멈췄을 때 로직을 실행해 준다.

# 5. 문제 해결 전략

## 1. 프로젝트 초기 설정

- 프로젝트는 리액트 라이브러리를 사용하였는데 `CRA`를 이용하지 않고 `webpac`, `babel`을 설치한 후에 직접 설정해 주었다.
- `css`대신 `sass`로 스타일 문서를 작성할 계획이라 `webpack`에 `sass-loader`를 넣어주었고, 이미지 파일을 읽어오기 위해 `file-loader` 또한 설치해주었다.

## 2. 상품 목록 보여주기

- 상품 목록 데이터를 받아올 때는 자바스크립트 내장 함수인 `fetch`를 이용했다.
- 상품 데이터에 있는 `isSale`, `isSoldOut`, `isExclusive` 값을 이용하여 상품 데이터를 각기 다르게 보여주었다.
- 상품의 글자수가 2줄 넘어가지 않도록 `line-clamp` 값을 `2`로 준 후 넘어가는 글자는 숨기고 생략표시 해 주었다.
- 가격은 일의 자리 숫자부터 3번째 마다 콤마를 찍어줘야 하기 때문에 해당 함수를 유틸 함수로 따로 빼서 사용해주었다. ([https://github.com/rae-han/challenge-musinsa/blob/main/front/src/utils/commaNumber.js](https://github.com/rae-han/challenge-musinsa/blob/main/front/src/utils/commaNumber.js))

    ```jsx
    export const commaNumber = (value) => {
      value = value.toString();
    
      value = value.split('').reverse().reduce((pre, cur, idx) => {
        if (idx > 0 && idx % 3 === 0) {
          pre.push(',')
        }
    
        return [...pre, cur]
      }, []).reverse().join('');
    
      return value;
    }
    ```

- 만약 상품 이미지를 불러올 수 없다면 리액트의 `onError` 를 사용하여 대체이미지를 보여주도록 했다.
- 상품 목록을 보여줄 때 중복돼 보이는 데이터가 있었다.
    1. 처음에는 상품 번호(`goodsNo`)를 이용해 중복된 데이터는 없애주었다.
    2. 상품 번호는 같지만 상태 값(`isSale` …)이 다른 데이터가 존재 했다.
    3. 상품 데이터 객체를 문자열로 바꾼 후 set을 이용하여 완전히 같인 데이터만 제거되도록 했다.

        ```jsx
        [...new Set([상품 데이터].map(JSON.stringify))].map(JSON.parse).(나머지 함수...)
        ```

- 상품 목록이 없다면(`length === 0`) 검색 결과 없음을 보여주는 컴포넌트를 보여주도록 분기하였다.
- 상품 페이지는 스크롤하여 하단으로 내려오면 추가적으로 서버에 요청하여 더 받아온다.
    1. 최하단으로 내려왔을 때 재요청을 하면 사용자에 따라 최하단까지 안내리는 사람도 있고 스크롤 함에 있어 끊기는 느낌이 강하게 들어 약간 여유를 주어 최하단에 가까운 특정 구간에서 스크롤 이벤트가 발생하면 데이터 요청을 하도록 하였다.
    2. 스크롤 이벤트로 요청을 하게 되면 해당 구간으로 진입 했을때 연속으로 이벤트가 발생하는 문제가 있다.
    3. 이를 해결하기 위해 쓰로틀링 기법을 사용했는데 코드가 길어져 useInfiniteScroll 훅으로 따로 빼줬다.([https://github.com/rae-han/challenge-musinsa/blob/main/front/src/hooks/useInfiniteScroll.js](https://github.com/rae-han/challenge-musinsa/blob/main/front/src/hooks/useInfiniteScroll.js))
    4. 요구 사항에는 불러온 데이터만 필터링 되도록 했는데, 작성된 코드는 페이지에 충분한 데이터가 없다면 다음 데이터를 요청하도록 하였다. 이 기능은 위 파일의 68번째 줄~78번째 줄 을 주석처리하면 없어진다.

  ## 3. 상품 목록 필터링 하기

    - 단독 상품, 세일 상품, 품절 포함 옵션을 선택할 경우 필터들을 모아두는 배열에 넣어 표시했다.
        - 해당 옵션을 한번 더 클릭하거나, 선택된 필터 목록을 클릭할 경우 배열에서 빼주어 사라지게 했다.
        - 해당 옵션 값을 상품 목록 데이터에 전달하는 것이 아닌, 해당 옵션 값이 들어 있는 객체에 어떻게 필터링 해줄 것인지 함수를 작성하고, 필터 값 만큼 함수를 실행시켜 필터링 해주었다.

            ```jsx
            // filter
            const options = [
              { key: 'search', title: '검색', onClick: () => setIsSearch(prev => !prev) },
              { key: 'isSale', title: '세일상품', type: 'state', cb: (value) => value.filter(item => item.isSale) },
              { key: 'isExclusive', title: '단독상품', type: 'state', cb: (value) => value.filter(item => item.isExclusive) },
              { key: 'isSoldOut', title: '품절포함', type: 'state', cb: (value) => value.map(item => ({ ...item, readable: true })) },
            ]
            ```

            ```jsx
            // goods
            const result = useMemo(() => {
              return filters.reduce((acc, cur) => {
                if (cur.cb) {
                  acc = cur.cb(acc)
                }
                return acc;
              }, goodsList);
            }, [goodsList, filters])
            ```

    - 검색어를 입력하면 검색어와 일치하는 상품명과 브랜드 명을 보여주게 했다.
        - 디바운싱 기법을 적용하여 검색어를 입력하는 중에 실시간으로 보여주지 않고, 특정 시간(500ms)동안 입력이 없을 때 로직이 실행되게 했다.
        - 일치하는 검색어는 강조표시를 해주도록 했는데 동적으로 정규식을 작성하기 위해 RegExp 빌트인 객체를 사용하였다. 검색어에는 특수문자가 있을수도 있고 자바스크립트의 RegExp 생성자를 이용하여 정규표현식 인스턴스를 생성할 경우 특수 문자가 정규표현식의 패턴이 되므로 이스케이프 처리하여 생성되도록 했다. 해당 정규표현식을 이용할 때 원래 있던 값을 사용해야하므로 캡쳐링($n)을 사용했다.

            ```jsx
            const specialRegExp  = /([\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])/gi;
            const newKeyword = keyword.replace(specialRegExp, '\\\$1');
            ```
