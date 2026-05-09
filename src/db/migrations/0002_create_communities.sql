CREATE TABLE IF NOT EXISTS communities (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  title TEXT NOT NULL,
  subtitle TEXT,
  location TEXT,
  phone TEXT,
  community_type TEXT,
  established TEXT,
  pet_policy TEXT,
  office_hours TEXT,
  hero_image TEXT,
  badge TEXT,
  address TEXT,
  manager_name TEXT,
  homes_available TEXT,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);