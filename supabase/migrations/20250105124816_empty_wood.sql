/*
  # Initial Schema Setup

  1. New Tables
    - `users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
    - `calculations`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `account_size` (numeric)
      - `risk_percentage` (numeric)
      - `stop_loss_distance` (numeric)
      - `market_type` (text)
      - `currency` (text)
      - `position_size` (numeric)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to:
      - Read their own data
      - Insert their own data
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create calculations table
CREATE TABLE IF NOT EXISTS calculations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  account_size numeric NOT NULL,
  risk_percentage numeric NOT NULL,
  stop_loss_distance numeric NOT NULL,
  market_type text NOT NULL,
  currency text NOT NULL,
  position_size numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE calculations ENABLE ROW LEVEL SECURITY;

-- Create security policies
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can read own calculations"
  ON calculations
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own calculations"
  ON calculations
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());