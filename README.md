# airbnb_clone_coding
2024-04-19
1. ::after와 ::before를 이용해 기능을 분리할 수 있음.
    - ::before에는 :hover 시 옆의 구분선을 가림.
    - ::after에는 영역을 요소와 동일하게 설정 후 hover 시            background-color 변경.


2024-05-02
1. background-image를 이용해 요소가 부모요소를 침범해 넘어서는 것을 막을 수 있음.
    -background-image linear-gradient(90deg, rgb(235, 235, 235) 0px, rgb(235, 235, 235) 50%, rgb(221, 221, 221) 50%, rgb(221, 221, 221) 100%)

2024-05-03
1. 웹사이트에서 동적인 효과는 성능 향상과 리소스 관리를 위해서 가능한 한 필요할 때만 나오고 다시 없어져야 함.
2.규모가 있는 프로젝트에서는 유지보수성, 메모리 누수 방지 등을 위해 이벤트 위임을 사용.

2024-10-04
1. event.composedPath()를 이용해 이벤트 캡처링 단계의 모든 요소를 배열 형태로 확인 가능.
2. array.some()을 통해 배열 안에 원하는 value가 있는지 확인 가능.