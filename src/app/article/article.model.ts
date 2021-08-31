export class Article {
  title: string | any;
  link: string | any;
  votes: number | any;

  constructor(title:string, link: string, votes?: number){
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }

  domain(): string | any {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    }catch (err){
      return null;
    }
  }
}
