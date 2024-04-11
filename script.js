function Book(title, author, pages, haveRead, info) {
  this.title = title;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = info;
  this.giveInfo = () => {
    console.log(this.info);
  };
}

const theHobbit = new Book(
  "The Hobbit",
  "JRR Toklien",
  188,
  true,
  "A thriling adventure in a fantastical land with an unassuming hero."
);

const ulysses = new Book(
  "Ulusses",
  "James Joyce",
  538,
  false,
  "An iconic work of Irish literature set in early 20th century Dublin"
);

theHobbit.giveInfo();
ulysses.giveInfo();
