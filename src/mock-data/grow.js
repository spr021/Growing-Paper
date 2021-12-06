const cardList = {
  point: 5000,
  cards: [
    {
      id: "1",
      title: "تخفیف ۴۰ درصد اشتراک",
      point: 300,
      img: "https://img.taaghche.com/logo/reward-sub-off-40.svg",
      deadline: "2020-03-25T03:45:00Z",
    },
    {
      id: "2",
      title: "تخفیف ۴۰ درصد اشتراک",
      point: 400,
      img: "https://img.taaghche.com/logo/reward-sub-off-30.svg",
      deadline: "",
    },
    {
      id: "3",
      title: "تخفیف ۴۰ درصد اشتراک",
      point: 250,
      img: "https://img.taaghche.com/logo/reward-book-off-40.svg",
      deadline: "",
    },
    {
      id: "4",
      title: "تخفیف ۴۰ درصد اشتراک",
      point: 600,
      img: "https://img.taaghche.com/logo/reward-book-off-30.svg",
      deadline: "2022-03-25T03:45:00Z",
    },
  ],
}

export const getCard = (id) =>
  cardList.cards.find((card) => card.id === id && card)

export default cardList
