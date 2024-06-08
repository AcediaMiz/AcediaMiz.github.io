const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
})
const surveyJson = {
  completedHtmlOnCondition: [
    {
      expression: "{correctAnswers} <= 3",
      html: "<h4>Олд. “Что ж, судя по всему, вы только начинаете знакомиться с новомодными молодежными словечками. Вам есть куда расти. Но не расстраивайтесь, скоро большая часть этих слов забудется и станет кринжем.”</h4>",
    },
    {
      expression: "{correctAnswers} <= 6",
      html: "<h4>Нормис. “Это основа, это, так сказать, база. Вы владеете сленгом на среднем уровне. Можете поддержать смол-ток с зумером, но поговорить с поколением “альфа” уже будет труднее. Если хотите углубить свои знания, попробуйте полистать Тик-ток часов эдак 6.”</h4>",
    },
    {
      expression: "{correctAnswers} >=7",
      html: "<h4>Имба. “Вы не НПС, вы настоящий гагчад и сигма. Чиллите на плотных вайбах и скамите мамонтов. Ваши знания настолько велики, что вам явно есть что добавить в этот лонгрид. Продолжайте в том же духе, но не переусердствуйте, а то уже кринж.”</h4>",
    },
  ],
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "question1",
          title: "Какое слово означает испанский стыд?",
          correctAnswer: "Item 1",
          choices: [
            {
              value: "Item 1",
              text: "Кринж",
            },
            {
              value: "Item 2",
              text: "Флекс",
            },
            {
              value: "Item 3",
              text: "Байт",
            },
            {
              value: "Item 4",
              text: "Вайб",
            },
          ],
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "radiogroup",
          name: "question2",
          title: "Какого человека называют токсичным?",
          correctAnswer: "Item 2",
          choices: [
            {
              value: "Item 1",
              text: "Яркого и веселого",
            },
            {
              value: "Item 2",
              text: "Неприятного и грубого",
            },
            {
              value: "Item 3",
              text: "Богатого",
            },
            {
              value: "Item 4",
              text: "Ведущего нездоровый образ жизни",
            },
          ],
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "radiogroup",
          name: "question3",
          title: 'Что значит слово "тильт"?',
          correctAnswer: "Item 3",
          choices: [
            {
              value: "Item 1",
              text: "Счастье и радость",
            },
            {
              value: "Item 2",
              text: "Спокойствие и гармония",
            },
            {
              value: "Item 3",
              text: "Раздражение и фрустрация",
            },
            {
              value: "Item 4",
              text: "Одержимость",
            },
          ],
        },
      ],
    },
    {
      name: "page4",
      elements: [
        {
          type: "radiogroup",
          name: "question4",
          title: 'Кто такая "альтушка"?',
          correctAnswer: "Item 2",
          choices: [
            {
              value: "Item 1",
              text: "Интренет-знаменитость",
            },
            {
              value: "Item 2",
              text: "Девушка с неформальной внешностью",
            },
            {
              value: "Item 3",
              text: "Идеальная девушка",
            },
            {
              value: "Item 4",
              text: "Школьница",
            },
          ],
        },
      ],
    },
    {
      name: "page5",
      elements: [
        {
          type: "radiogroup",
          name: "question5",
          title: 'Что значит "тащить"?',
          correctAnswer: "Item 1",
          choices: [
            {
              value: "Item 1",
              text: "Выигрывать, эффективно прилагать усилия",
            },
            {
              value: "Item 2",
              text: "Волочь",
            },
            {
              value: "Item 3",
              text: "Получать удовольствие",
            },
            {
              value: "Item 4",
              text: "Подтягивать по учебе",
            },
          ],
        },
      ],
    },
    {
      name: "page6",
      elements: [
        {
          type: "radiogroup",
          name: "question6",
          title: "Как называют привлекательного, но ненадежного парня?",
          correctAnswer: "Item 4",
          choices: [
            {
              value: "Item 1",
              text: "Масик",
            },
            {
              value: "Item 2",
              text: "Штрих",
            },
            {
              value: "Item 3",
              text: "Скуф",
            },
            {
              value: "Item 4",
              text: "Тюбик",
            },
          ],
        },
      ],
    },
    {
      name: "page7",
      elements: [
        {
          type: "radiogroup",
          name: "question7",
          title: 'Кто такой "редфлаг"?',
          correctAnswer: "Item 4",
          choices: [
            {
              value: "Item 1",
              text: "Коммунист",
            },
            {
              value: "Item 2",
              text: "Человек, занимающий высокое положение в обществе",
            },
            {
              value: "Item 3",
              text: "Мошенник",
            },
            {
              value: "Item 4",
              text: "Человек с выраженными отрицательными чертами характера",
            },
          ],
        },
      ],
    },
    {
      name: "page8",
      elements: [
        {
          type: "radiogroup",
          name: "question8",
          title: 'Что означает "плов"?',
          correctAnswer: "Item 1",
          choices: [
            {
              value: "Item 1",
              text: "Повествование от первого лица",
            },
            {
              value: "Item 2",
              text: "Блюдо восточной кухни",
            },
            {
              value: "Item 3",
              text: "Сюжет, история",
            },
            {
              value: "Item 4",
              text: "Человек с лишним весом",
            },
          ],
        },
      ],
    },
    {
      name: "page9",
      elements: [
        {
          type: "radiogroup",
          name: "question9",
          title: "Как по-другому называют компьютер?",
          correctAnswer: "Item 4",
          choices: [
            {
              value: "Item 1",
              text: "ЭВМ",
            },
            {
              value: "Item 2",
              text: "Бот",
            },
            {
              value: "Item 3",
              text: "Процессор",
            },
            {
              value: "Item 4",
              text: "Пекарня",
            },
          ],
        },
      ],
    },
    {
      name: "page10",
      elements: [
        {
          type: "radiogroup",
          name: "question10",
          title: 'Что означает слово "кейс"?',
          correctAnswer: "Item 4",
          clearIfInvisible: "onHidden",
          choices: [
            {
              value: "Item 1",
              text: "Чемодан",
            },
            {
              value: "Item 2",
              text: "Объект симпатии",
            },
            {
              value: "Item 3",
              text: "Большая сумма денег",
            },
            {
              value: "Item 4",
              text: "Случай, ситуация",
            },
          ],
        },
      ],
    },
  ],

  widthMode: "responsive",
}
const survey = new Survey.Model(surveyJson)
$(function () {
  $("#surveyContainer").Survey({ model: survey })
})
survey.applyTheme({
  themeName: "default",
  colorPalette: "light",
  isPanelless: false,
  backgroundImage: "",
  backgroundOpacity: 1,
  backgroundImageAttachment: "scroll",
  backgroundImageFit: "cover",
  cssVariables: {
    "--sjs-questionpanel-backcolor": "rgba(255, 255, 255, 0)",
    "--sjs-questionpanel-hovercolor": "rgba(248, 248, 248, 0)",
    "--sjs-corner-radius": "4px",
    "--sjs-base-unit": "8px",
    "--sjs-shadow-small": "0px 0px 5px 0px rgba(0, 0, 0, 0.35)",
    "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
    "--sjs-border-default": "rgba(0, 0, 0, 0.16)",
    "--sjs-border-light": "rgba(0, 0, 0, 0.09)",
    "--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
    "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
    "--sjs-general-backcolor-dim-light": "rgba(249, 249, 249, 1)",
    "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
    "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
    "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
    "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
    "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
    "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
    "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.35)",
    "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-inner-reset": "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
    "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
    "--sjs-special-red": "rgba(229, 10, 62, 1)",
    "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
    "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-green": "rgba(25, 179, 148, 1)",
    "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
    "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-blue": "rgba(67, 127, 217, 1)",
    "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
    "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
    "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-article-font-xx-large-textDecoration": "none",
    "--sjs-article-font-xx-large-fontWeight": "700",
    "--sjs-article-font-xx-large-fontStyle": "normal",
    "--sjs-article-font-xx-large-fontStretch": "normal",
    "--sjs-article-font-xx-large-letterSpacing": "0",
    "--sjs-article-font-xx-large-lineHeight": "64px",
    "--sjs-article-font-xx-large-paragraphIndent": "0px",
    "--sjs-article-font-xx-large-textCase": "none",
    "--sjs-article-font-x-large-textDecoration": "none",
    "--sjs-article-font-x-large-fontWeight": "700",
    "--sjs-article-font-x-large-fontStyle": "normal",
    "--sjs-article-font-x-large-fontStretch": "normal",
    "--sjs-article-font-x-large-letterSpacing": "0",
    "--sjs-article-font-x-large-lineHeight": "56px",
    "--sjs-article-font-x-large-paragraphIndent": "0px",
    "--sjs-article-font-x-large-textCase": "none",
    "--sjs-article-font-large-textDecoration": "none",
    "--sjs-article-font-large-fontWeight": "700",
    "--sjs-article-font-large-fontStyle": "normal",
    "--sjs-article-font-large-fontStretch": "normal",
    "--sjs-article-font-large-letterSpacing": "0",
    "--sjs-article-font-large-lineHeight": "40px",
    "--sjs-article-font-large-paragraphIndent": "0px",
    "--sjs-article-font-large-textCase": "none",
    "--sjs-article-font-medium-textDecoration": "none",
    "--sjs-article-font-medium-fontWeight": "700",
    "--sjs-article-font-medium-fontStyle": "normal",
    "--sjs-article-font-medium-fontStretch": "normal",
    "--sjs-article-font-medium-letterSpacing": "0",
    "--sjs-article-font-medium-lineHeight": "32px",
    "--sjs-article-font-medium-paragraphIndent": "0px",
    "--sjs-article-font-medium-textCase": "none",
    "--sjs-article-font-default-textDecoration": "none",
    "--sjs-article-font-default-fontWeight": "400",
    "--sjs-article-font-default-fontStyle": "normal",
    "--sjs-article-font-default-fontStretch": "normal",
    "--sjs-article-font-default-letterSpacing": "0",
    "--sjs-article-font-default-lineHeight": "28px",
    "--sjs-article-font-default-paragraphIndent": "0px",
    "--sjs-article-font-default-textCase": "none",
    "--sjs-general-backcolor-dim": "#DFDED9",
    "--sjs-primary-backcolor": "rgba(147, 67, 67, 1)",
    "--sjs-primary-backcolor-dark": "rgba(132, 60, 60, 1)",
    "--sjs-primary-backcolor-light": "rgba(147, 67, 67, 0.1)",
    "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
  },
  headerView: "basic",
})
