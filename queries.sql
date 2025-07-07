SELECT conname
FROM pg_constraint
WHERE conrelid = 'users_xref'::regclass AND contype = 'p';

ALTER TABLE users_xref DROP CONSTRAINT "PK_3456998b8efca1ab548e3d3690a";

ALTER TABLE users_xref ADD PRIMARY KEY (user_id);


ALTER TABLE user_docs DROP CONSTRAINT IF EXISTS user_docs_user_id_fkey;

ALTER TABLE user_info DROP CONSTRAINT IF EXISTS user_info_user_id_fkey;

ALTER TABLE user_roles DROP CONSTRAINT IF EXISTS user_roles_user_id_fkey;

ALTER TABLE user_applications DROP CONSTRAINT IF EXISTS user_applications_user_id_fkey;

-- user_docs table
ALTER TABLE user_docs
  ADD CONSTRAINT user_docs_user_id_fkey
  FOREIGN KEY (user_id)
  REFERENCES users_xref(user_id)
  ON DELETE CASCADE;

-- user_info table
ALTER TABLE user_info
  ADD CONSTRAINT user_info_user_id_fkey
  FOREIGN KEY (user_id)
  REFERENCES users_xref(user_id)
  ON DELETE CASCADE;

-- user_roles table
ALTER TABLE user_roles
  ADD CONSTRAINT user_roles_user_id_fkey
  FOREIGN KEY (user_id)
  REFERENCES users_xref(user_id)
  ON DELETE CASCADE;

-- user_applications table
ALTER TABLE user_applications
  ADD CONSTRAINT user_applications_user_id_fkey
  FOREIGN KEY (user_id)
  REFERENCES users_xref(user_id)
  ON DELETE CASCADE;