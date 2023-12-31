export interface IOptions {
    value: number,
    label: string,
} 

export const targets : IOptions[] = [
    { value: 0, label: '0 – никогда' },
    { value: 1, label: '1 – очень редко' },
    { value: 2, label: '2 – редко' },
    { value: 3, label: '3 – иногда' },
    { value: 4, label: '4 – часто' },
    { value: 5, label: '5 – очень часто' },
    { value: 6, label: '6 - ежедневно' },
  ];

  
interface ITest {
    text:string,
    options:IOptions[],
}
export const data : ITest[] = [
    {
        text:'1. Я чувствую себя эмоционально опустошенным (ой)',
        options: targets,
    },{
        text:'2. К концу рабочего дня я чувствую себя как выжатый лимон',
        options: targets,
    },    {
        text:'3. Я чувствую себя усталым(ой), когда встаю утром и должен(на) идти на работу',
        options: targets,
    },    {
        text:'4. Я хорошо понимаю каждого моего ученика и нахожу к каждому свой подход',
        options: targets,
    },    {
        text:'5. Я общаюсь с моими учениками чисто формально, без лишних эмоций, и стремлюсь свести общение с ними до минимума',
        options: targets,
    },    {
        text:'6. Во время и после занятий я чувствую себя в приподнятом настроении и эмоционально воодушевленно',
        options: targets,
    },    {
        text:'7. Я умею находить правильное решение в конфликтных ситуациях с моими учениками',
        options: targets,
    },    {
        text:'8. Я чувствую угнетенность и апатию',
        options: targets,
    },    {
        text:'9. Я могу позитивно влиять на продуктивность работы моих учеников и коллег',
        options: targets,
    },    {
        text:'10. В последнее время я стал(а) более отстраненным(ной) и жестким(ой) по отношению к тем, с кем работаю',
        options: targets,
    },    {
        text:'11. Ученики, их родители и администрация школы слишком много требуют от меня или манипулируют мною. Они преследуют только свои интересы',
        options: targets,
    },    {
        text:'12. У меня много профессиональных планов на будущее, и я верю в их осуществление',
        options: targets,
    },    {
        text:'13. Я испытываю эмоциональный спад на работе',
        options: targets,
    },    {
        text:'14. Я чувствую равнодушие и потерю интереса ко многому, что радовало меня раньше',
        options: targets,
    },    {
        text:'15. Я не могу быть участливой ко всем ученикам (студентам), особенно недисциплинированным и не желающим учиться',
        options: targets,
    },    {
        text:'16. Мне хочется уединиться от всех и отдохнуть от работы',
        options: targets,
    },    {
        text:'17. Я легко могу создать атмосферу доброжелательности и сотрудничества при общении с моими учениками и коллегами',
        options: targets,
    },    {
        text:'18. Я легко общаюсь с учениками и их родителями независимо от их социального положения и поведения',
        options: targets,
    },    {
        text:'19. Я многое успеваю сделать на работе и дома',
        options: targets,
    },    {
        text:'20. Я чувствую себя на пределе возможностей',
        options: targets,
    },    {
        text:'21. Я многого смогу еще достичь в своей жизни',
        options: targets,
    },    {
        text:'22. Бывает, что коллеги, ученики и их родители перекладывают на меня груз своих проблем и обязанностей',
        options: targets,
    },  
]
export default data;