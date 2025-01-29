export class GitHub {
  constructor() {
    this.clientId = "Ov23li4O35baKnqSD1vr";
    this.clientSecret = "c96b217fbe79a35f704a866bad3f849584261b85";
  }

  async getUser(userName) {
    try {
      const data = await fetch(
        `https://api.github.com/users/${userName}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
      );
      return await data.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}
