import { SlideContent } from './types';

// CDN Base URL for the GitHub repository
const CDN_BASE = "https://raw.githubusercontent.com/chaesoohoon/short-38h/88b51a90654d732bb9181ce3e90426c4a376b8a0/portpolio";

// vCard Data for QR Code
const vCardData = `BEGIN:VCARD
VERSION:3.0
N:채;수훈;;;
FN:채수훈
ORG:국제직업전문학교
TITLE:디자인
TEL;TYPE=CELL:010-6274-6860
END:VCARD`;

// Generate QR Code URL
const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(vCardData)}&bgcolor=ffffff&color=000000&margin=10`;

export const COURSE_DETAILS = {
  title: "숏폼콘텐츠 제작을 위한 영상편집(입문)",
  period: "2025.01.15 ~ 01.31",
  time: "09:00 ~ 12:00 (총 38시간)",
  contact: "010-6274-6860"
};

export const SLIDE_CONTENT: SlideContent[] = [
  {
    id: 1,
    layout: 'finale',
    title: "SCENE 1 : TAKE 1",
    subtitle: "상상은 컷(Cut), 이제는 액션(Action).\n당신의 크리에이티브가 스크린을 장악할 시간.",
    mentorComment: "모든 위대한 영화도 첫 번째 컷에서 시작되었습니다. 당신의 레디, 액션을 기다립니다.",
    extraData: { subTitle2: "NOW SHOWING" }
  },
  {
    id: 2,
    layout: 'profile',
    title: "DIRECTOR",
    subtitle: "CHAE SU HOON",
    highlight: "Visual Director / Editor",
    items: [
      // Career Section
      "現 국제직업전문학교 미디어 콘텐츠 전임",
      "前 SBS아카데미 컴퓨터아트학원 전임",
      "광산구청 브랜딩 BI 제작 프로젝트 참여",
      // Projects Section
      "2024 대한민국 김치대전 메인 디자인 디렉팅",
      "2024 양동 통맥축제 비주얼 아이덴티티",
      "2023 해남 미남축제 / 광주MBC 지오마라톤",
      "삼성 디지털프라자 & LG가전 SNS 마케팅 디자인",
      "관공서 및 대기업 프로모션 디자인 다수"
    ],
    mentorComment: "이론만 아는 강사가 아닙니다. 현장에서 뛴 실무자의 감각으로 '팔리는 디자인'의 비밀을 공유합니다."
  },
  {
    id: 3,
    layout: 'list',
    title: "WHY NOW?",
    subtitle: "왜 지금 숏폼이어야 하는가?",
    items: [
      "도파민 이코노미의 핵심 키 (Key)",
      "브랜드가 생존하는 유일한 알고리즘",
      "최소 시간 투자, 최대 마케팅 효율"
    ],
    mentorComment: "텍스트는 읽지 않고, 긴 영상은 스킵합니다. 마케팅의 정답은 오직 '숏폼'입니다."
  },
  {
    id: 4,
    layout: 'text-left',
    title: "THE SECRET",
    subtitle: "툴(Tool)을 배우지 마세요.\n'설득의 기술'을 배우세요.",
    mentorComment: "프리미어 프로 기능은 유튜브에도 있습니다. 학원에서는 '사람을 멈추게 하는 기획'과 '끝까지 보게 만드는 편집'을 배웁니다."
  },
  {
    id: 5,
    layout: 'center',
    title: "PIPELINE",
    subtitle: "Planning → Shooting → Editing → Viral",
    highlight: "Zero to Hero Mastery",
    mentorComment: "단순 컷편집이 아닙니다. AI 기획부터 촬영, 편집, 그리고 알고리즘을 타는 업로드 전략까지 A to Z를 관통합니다."
  },
  {
    id: 6,
    layout: 'list',
    title: "FOR WHOM?",
    subtitle: "이런 분들에게 강력 추천합니다",
    items: [
      "편집이 두려운 '왕초보' 입문자",
      "내 가게 홍보가 시급한 '사장님'",
      "나만의 무기가 필요한 '취준생/N잡러'"
    ],
    mentorComment: "전공 여부는 중요하지 않습니다. '변화하고 싶다'는 의지 하나면 충분합니다."
  },
  {
    id: 7,
    layout: 'grid',
    title: "AFTER CLASS",
    subtitle: "38시간 후, 달라질 당신의 모습",
    items: [
      "콘텐츠 기획의 구조화",
      "망설임 없는 컷 편집",
      "시선을 뺏는 썸네일",
      "AI 도구의 자유로운 활용",
      "알고리즘 이해도 상승",
      "나만의 포트폴리오 완성"
    ],
    mentorComment: "영상을 보는 눈이 완전히 달라집니다. '재밌다'에서 끝나는 게 아니라 '이렇게 만들었구나'를 분석하게 됩니다."
  },
  {
    id: 8,
    layout: 'schedule',
    title: "SCHEDULE",
    subtitle: "2025.01.15 - 01.31",
    highlight: "Only 3 Weeks (38H)",
    mentorComment: "가장 알차게. 오전 시간을 활용해 인생을 바꿀 기술을 장착하세요."
  },
  {
    id: 9,
    layout: 'schedule',
    title: "TIME TABLE",
    subtitle: "09:00 - 12:00",
    highlight: "Last 2 Days: 09:00 - 13:00",
    mentorComment: "하루 3시간의 몰입. 부담스럽지 않지만, 실력을 쌓기엔 충분한 시간입니다."
  },
  {
    id: 10,
    layout: 'grid',
    title: "CURRICULUM",
    items: ["숏폼 트렌드 해킹", "Chat GPT & Gemini 기획", "프리미어 프로 속성 마스터", "후킹(Hooking) 자막 기술", "클릭을 부르는 썸네일", "최종 시사회 & 피드백"],
    mentorComment: "불필요한 이론은 뺐습니다. 당장 써먹을 수 있는 실전 압축 커리큘럼입니다."
  },
  {
    id: 11,
    layout: 'grid',
    title: "AI WEAPONS",
    subtitle: "작업 속도 10배 향상 치트키",
    items: ["ChatGPT (Planning)", "Gemini (Scripting)", "Midjourney (Source)", "Vrew (Caption)", "Premiere Pro (Final)"],
    mentorComment: "남들이 10시간 걸릴 작업을 1시간에 끝내는 AI 활용 노하우를 전수해 드립니다."
  },
  {
    id: 12,
    layout: 'portfolio',
    title: "OUTPUT",
    subtitle: "Student Best Works",
    mentorComment: "수강생들이 만든 실제 결과물입니다. '나도 할 수 있을까?'라는 의심을 '나도 할 수 있다'는 확신으로 바꿔드립니다.",
    extraData: {
        link: "https://drive.google.com/drive/folders/1BmoXFyN0itsQomPZjySli0ojWF21my1V?usp=drive_link",
        samples: [
            // Replaced with generic but professional titles suitable for any video content
            { id: 1, title: "감각적인 비주얼 스토리", type: "video", src: `${CDN_BASE}/1.mp4` },
            { id: 2, title: "역동적인 모션 그래픽", type: "video", src: `${CDN_BASE}/2.mp4` },
            { id: 3, title: "트렌디한 편집 스타일", type: "video", src: `${CDN_BASE}/3.mp4` },
            { id: 4, title: "임팩트 있는 숏폼 영상", type: "video", src: `${CDN_BASE}/4.mp4` },
        ]
    }
  },
  {
    id: 13,
    layout: 'text-left',
    title: "RULES",
    subtitle: "프로가 되는 최소한의 약속",
    items: [
        "출석률 80% 미만 시 수료 불가",
        "지각/조퇴 3회 = 결석 1회 처리",
        "QR코드 입/퇴실 체크 필수"
    ],
    mentorComment: "성실함이 곧 실력입니다. 국비 지원 과정인 만큼 책임감을 가지고 임해주세요."
  },
  {
    id: 14,
    layout: 'center',
    title: "BENEFITS",
    subtitle: "수료생 특전",
    highlight: "수료증 + 포트폴리오 + 평생 무료 A/S",
    mentorComment: "과정이 끝나도 여러분의 결과물은 남습니다. 취업과 창업에 즉시 활용 가능한 포트폴리오를 가져가세요."
  },
  {
    id: 15,
    layout: 'finale',
    title: "UNLIMITED POTENTIAL",
    subtitle: "당신의 이야기가\n세상의 트렌드가 되는 순간.",
    mentorComment: "지금의 작은 시작이 당신을 상상조차 못한 멋진 미래로 이끌 것입니다. 주인공은 바로 당신입니다.",
    extraData: { subTitle2: "THE VISION" }
  },
  {
    id: 16,
    layout: 'finale',
    title: "CRANK IN",
    subtitle: "EXECUTIVE TUTOR\nCHAE SOO HOON",
    highlight: "010-6274-6860",
    mentorComment: "든든한 조력자가 되겠습니다. 언제든 문을 두드려주세요.",
    extraData: {
        qrCode: qrCodeUrl,
        subTitle2: "YOUR CREATIVE PARTNER"
    }
  }
];