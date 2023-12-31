export interface IRecommendBookMock {
    image: string,
    title: string,
    description:string;
}

export const RecommendBook: IRecommendBookMock[] = [
    {
        image: require('images/Recommendations/book1.png'),
        title: 'А.В. Мудрик «Учитель: Мастерство и вдохновение»',
        description:'Книга содержит практикумы, игровые методики, которые будут полезны особенно тем, кто только начинает свой путь в педагогику.',},
    {
        image: require('images/Recommendations/book2.png'),
        title: 'А.А. Гин «Приёмы педагогической техники»', 
        description:'В книге описано много технологий сберегающих здоровье, силы и время педагога. Автор предлагает оригинальные способы работы с детьми, а так же инновации в образовании, открытые задачи.',},
    {
        image: require('images/Recommendations/book3.png'),
        title: 'Ю.П. Азаров «Тайны педагогического мастерства»',
        description:'Цель этой книги — познакомить читателя с великими тайнами педагогического искусства. В этой книге вы не только познакомитесь с идеями выдающихся педагогов, мыслителей, но и узнаете, как это наследие может быть использовано в повседневной педагогической работе.',},
    {
        image: require('images/Recommendations/book4.png'),
        title: 'С.Л. Соловейчик «Педагогика для всех»',
        description:'Читается книга удивительно легко. Текст буквально притягивает, оторваться невозможно. Даже если вы — знаток воспитания, всё равно найдёте то, что будет для вас совершенно новым.',},
]

export default RecommendBook