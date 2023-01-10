// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

/*<img class="discussion__avatar--image"
src="https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4"
alt="avatar of kimploo"></img>*/

const avatarWrapper = document.createElement("div");
avatarWrapper.className = "discussion__avatar--wrapper";

const avatarImg = document.createElement("img");
avatarImg.src = obj.avatarUrl;
avatarImg.alt = 'avatar of' + obj.author;

avatarWrapper.append(avatarImg);


const discussionContent = document.createElement("div");
discussionContent.className = "discussion__content";
const discussionAnswered = document.createElement("div");
discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.

const discussionTitle = document.createElement("h2");
const titleAnchor = document.createElement("a");
titleAnchor.href = obj.url;
titleAnchor.textContent = obj.title;
discussionTitle.append(titleAnchor);

const discussionInformation = document.createElement("div");
discussionInformation.className = "discussion_information";
discussionInformation.textContent = `${obj.author} / 
${new Date(obj.createdAt).toLocaleTimeString()}`;
discussionContent.append(discussionTitle, discussionInformation);

const checked = document.createElement("p");
/*checked.textContent = obj.answer ?  : ;*/
discussionAnswered.append(checked);

/*const face =*/ 

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);
