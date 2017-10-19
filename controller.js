let mentors = [
  {
    name: 'Shea',
    isGood: 'Meh',
    helpful: 'When present? maybe...'
  }
];

module.exports = {
  create(req, res) {
    mentors.push(req.body);
    return res.status(200).json(mentors);
  },
  read(req, res) {
    return res.status(200).json(mentors);
  },
  update(req, res) {
    mentors = mentors.map(mentor => {
      if (mentor.name === req.params.name) {
        return Object.assign({}, mentor, req.body);
      }
      return mentor;
    });
    return res.status(200).json(mentors);
  },
  destroy(req, res) {}
};
