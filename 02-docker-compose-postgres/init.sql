CREATE TABLE IF NOT EXISTS roles (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  stage TEXT NOT NULL
);

INSERT INTO roles (title, company, stage) VALUES
  ('Technical Graduate', 'CGI', 'Applied'),
  ('Graduate Analyst', 'Example Consulting', 'Interview'),
  ('Cloud Developer Intern', 'Example Cloud', 'Saved')
ON CONFLICT DO NOTHING;
