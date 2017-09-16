export class LiturgicResponse {
  status: string;
  data: Liturgy = new Liturgy;
}

export class Liturgy {
  _id: string;
  content: LiturgyContent = new LiturgyContent;
  readingDate: number;
  lang: string;
}

export class LiturgyContent {
  fr: Reading = new Reading;
  ps: Reading = new Reading;
  sr: Reading = new Reading;
  gsp: Reading = new Reading;
  saint: string;
  liturgicTitle: string;
  feast: string;
}

export class Reading {
  st: string;
  lt: string;
  text: string;
}
