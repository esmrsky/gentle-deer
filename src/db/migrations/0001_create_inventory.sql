CREATE TABLE IF NOT EXISTS inventory_homes (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  title TEXT NOT NULL,
  status TEXT,
  price TEXT,
  address TEXT,
  community TEXT,
  beds INTEGER,
  baths INTEGER,
  sqft INTEGER,
  image TEXT,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);