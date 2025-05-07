import Article from "./Article";

const data = [
    {
        title: "정치",
        description:
            "[서울=뉴시스] 조성봉 기자 = 우원식 국회의장과 추경호 국민의힘",
        date: "2024-11-13",
    },
    {
        title: "경제",
        description:
            "[서울=뉴시스]이현주 기자 = CJ그룹이 18일 CJ주식회사 경영지원대표",
        date: "2024-11-13",
    },
    {
        title: "사회",
        description: "[서울=뉴시스]이현주 기자 = CJ그룹이 18일 CJ주식회사",
        date: "2024-11-13",
    },
    {
        title: "문화",
        description:
            "[서울=뉴시스]이현주 기자 = CJ그룹이 18일 CJ주식회사 경영지원대표로 허민회",
        date: "2024-11-13",
    },
];

const Articles = () => {
    return (
        <>
            <h1>오늘의 뉴스</h1>
            {data && data.map((e) => <Article data={e} />)}
        </>
    );
};
export default Articles;
