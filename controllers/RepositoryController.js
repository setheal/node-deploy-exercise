const repositories = require('../dummyDb/repositories');

class RepositoryController {
  static getAllRepositories(req, res) {
    return res.status(200).json({
      repositories,
      message: "All the GitHub's repositories"
    });
  }

  static getRepository(req, res) {
    const findRepo = repositories.find(repo => repo.id === parseInt(req.params.id, 10));

    if(findRepo) {
      return res.status(200).json({
        repository: findRepo,
        message: "A GitHub's repository"
      });
    }

    return res.status(404).json({
      message: "No repository found"
    });
  }
}

module.exports = RepositoryController;