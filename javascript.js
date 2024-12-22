//            document.addEventListener("DOMContentLoaded", function () {
//               // 주요 DOM 요소 선택
//             const musicFile = document.querySelector('.music_file');
//             const musicPlayer = document.querySelector('.musicplayer-container div');
//             const polygon = document.querySelector('.polygon');
//             const nextButton = document.querySelector('.n_bt');
//             const backButton = document.querySelector('.b_bt');
//             const openPopup = document.querySelector('.opening');
//             const albumFile = document.querySelector('.album_file');
//             const photoPopup = document.querySelector('.photo-container div');
//             const glitchFonts = document.querySelectorAll('.glitch-text div'); 

//     // photo와 albumphoto 둘 다 드래그 가능하도록 설정
//     enableDrag(photoPopup);  // photo 요소와 그 자식 요소(albumphoto)를 함께 드래그 가능하도록 설정

//     // musicplayer-container와 musicplayer도 드래그 가능하도록 설정
//     enableDrag(musicPlayer);  // musicplayer-container와 musicplayer도 함께 드래그 가능하도록 설정
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // 주요 DOM 요소 선택
//   const musicFile = document.querySelector('.music_file');
//   const musicPlayer = document.querySelector('.musicplayer');
//   const polygon = document.querySelector('.polygon');
//   const nextButton = document.querySelector('.n_bt');
//   const backButton = document.querySelector('.b_bt');
//   const openPopup = document.querySelector('.opening');
//   const albumFile = document.querySelector('.album_file');
//   const photoPopup = document.querySelector('.photo-container');
//   const glitchFonts = document.querySelectorAll('.glitch-text div'); 

//   // 오디오 플레이어 생성
//   const audioPlayer = document.createElement('audio');
//   document.body.appendChild(audioPlayer);

//   // 재생 목록 및 상태 관리
//   const playlist = [
//       "mp3/1.mp3", "mp3/2.mp3", "mp3/3.mp3", "mp3/4.mp3",
//       "mp3/5.mp3", "mp3/6.mp3", "mp3/7.mp3", "mp3/8.mp3",
//       "mp3/9.mp3", "mp3/10.mp3", "mp3/11.mp3", "mp3/12.mp3"
//   ];
//   let currentTrack = 0;
//   let isPlaying = false;
//   let pausedAt = 0;

//   // 초기화 함수
//   function initializePlayer() {
//       musicPlayer.style.display = 'none';
//       polygon.style.display = 'none';
//       nextButton.style.display = 'none';
//       backButton.style.display = 'none';
//       openPopup.style.display = 'none';
//       photoPopup.style.display = 'none';
//       glitchFonts.forEach(font => font.style.display = 'none');
//   }

//   // 트랙 재생
//   function playTrack(index) {
//       if (index >= 0 && index < playlist.length) {
//           audioPlayer.src = playlist[index];
//           audioPlayer.currentTime = pausedAt;
//           audioPlayer.play();
//           isPlaying = true;
//           polygon.src = "img/pouse.png";
//           updateGlitchText(index);
//       }
//   }

//   // 글씨 업데이트
//   function updateGlitchText(index) {
//       glitchFonts.forEach((font, i) => {
//           font.style.display = i === index ? 'block' : 'none';
//       });
//   }

//   // 재생/일시정지 토글
//   function togglePlayPause() {
//       if (isPlaying) {
//           pausedAt = audioPlayer.currentTime;
//           audioPlayer.pause();
//           isPlaying = false;
//           polygon.src = "img/Polygon.png";
//       } else {
//           playTrack(currentTrack);
//           openPopup.style.display = 'none';
//       }
//   }

//   // 다음/이전 트랙 재생
//   function playNextTrack() {
//       if (currentTrack + 1 < playlist.length) {
//           currentTrack++;
//           pausedAt = 0;
//           playTrack(currentTrack);
//       }
//   }

//   function playPreviousTrack() {
//       if (currentTrack - 1 >= 0) {
//           currentTrack--;
//           pausedAt = 0;
//           playTrack(currentTrack);
//       }
//   }

//   // 음악 파일 클릭 시 팝업
//   musicFile.addEventListener('click', function () {
//       musicPlayer.style.display = 'block';
//       polygon.style.display = 'block';
//       nextButton.style.display = 'block';
//       backButton.style.display = 'block';
//       openPopup.style.display = 'block';
//   });

//   // 앨범 클릭 시 사진 팝업 표시
//   albumFile.addEventListener('click', function () {
//       photoPopup.style.display = 'block';
//   });

//   // 트랙 종료 시 자동 재생
//   audioPlayer.addEventListener('ended', function () {
//       if (currentTrack + 1 < playlist.length) {
//           currentTrack++;
//           pausedAt = 0;
//           playTrack(currentTrack);
//       } else {
//           isPlaying = false;
//           polygon.src = "img/Polygon.png";
//       }
//   });

//   // 버튼 클릭 이벤트 등록
//   polygon.addEventListener('click', togglePlayPause);
//   nextButton.addEventListener('click', playNextTrack);
//   backButton.addEventListener('click', playPreviousTrack);

//   // 초기화 실행
//   initializePlayer();
// });

// document.addEventListener("DOMContentLoaded", function () {
// const albumFile = document.querySelector('.album_file'); // album_file 요소 선택
// const photoPopup = document.querySelector('.photo'); // photo 요소 선택
// const mainPhotoPopup = document.querySelector('.mainphoto'); // mainphoto 요소 선택
// const musicPlayerContainer = document.querySelector('.musicplayer-container'); // musicplayer-container 요소 선택
// const musicPlayer = document.querySelector('.musicplayer'); // musicplayer 요소 선택
// const photocontainer = document.querySelector('.photo-container'); // photo 요소

// // 처음에는 photo와 albumphoto 요소를 숨깁니다.
// photocontainer.style.display = 'none';

// // album_file 클릭 시 photo와 mainphoto 팝업 표시
// albumFile.addEventListener('click', function () {
// photocontainer.style.display = 'block'; // photo 표시
// });

// // 공통 드래그 앤 드롭 함수 (photo 요소와 그 자식 요소인 albumphoto가 함께 움직이도록 수정)
// function enableDrag(element) {
// let isDragging = false;
// let offsetX = 0, offsetY = 0;

// // 마우스 눌렀을 때
// element.addEventListener('mousedown', function (event) {
//   isDragging = true;
//   element.style.cursor = 'grabbing'; // 커서 변경
// });

// // 마우스 움직일 때
// document.addEventListener('mousemove', function (event) {
//   if (isDragging) {
//       const newX = event.clientX - offsetX;
//       const newY = event.clientY - offsetY;

//       // element 위치 업데이트 (photo)
//       element.style.left = `${newX}px`; 
//       element.style.top = `${newY}px`;

//   }
// });

// // 마우스 뗐을 때
// document.addEventListener('mouseup', function () {
//   isDragging = false;
//   element.style.cursor = 'grab'; // 커서 복원
// });
// }

// // photo와 albumphoto 둘 다 드래그 가능하도록 설정
// enableDrag(photocontainer);  // photo 요소와 그 자식 요소(albumphoto)를 함께 드래그 가능하도록 설정

// // musicplayer-container와 musicplayer도 드래그 가능하도록 설정
// enableDrag(musicPlayerContainer);  // musicplayer-container와 musicplayer도 함께 드래그 가능하도록 설정
// });
