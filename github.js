class GitHub {
  constructor() {
    this.client_id = 'dfb75688de762be43b6f';
    this.client_secret = 'c6d8d86ed88bea2bbb3455cf0e01a4f7adff5981'
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  //Fetch user   
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}