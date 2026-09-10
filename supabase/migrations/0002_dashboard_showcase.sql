-- Illustrative content for the Home page hero's "Live dashboard" preview.
-- Public marketing content, not real audit-product data — editable without a code deploy.
create table dashboard_showcase_stats (
  id uuid primary key default gen_random_uuid(),
  value text not null,
  label text not null,
  sort_order integer not null default 0,
  created_at timestamptz default now()
);

create table dashboard_showcase_rows (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  percent integer not null check (percent >= 0 and percent <= 100),
  tone text not null check (tone in ('verified', 'flag', 'muted')),
  sort_order integer not null default 0,
  created_at timestamptz default now()
);

alter table dashboard_showcase_stats enable row level security;
alter table dashboard_showcase_rows enable row level security;

-- Allows anyone to read the dashboard showcase stats.
create policy "Anyone can read dashboard showcase stats"
  on dashboard_showcase_stats for select to anon, authenticated
  using (true);

-- Allows authenticated users to insert dashboard showcase stats.
create policy "Authenticated users can insert dashboard showcase stats"
  on dashboard_showcase_stats for insert to authenticated
  with check (true);

-- Allows authenticated users to update dashboard showcase stats.
create policy "Authenticated users can update dashboard showcase stats"
  on dashboard_showcase_stats for update to authenticated
  using (true)
  with check (true);

-- Allows authenticated users to delete dashboard showcase stats.
create policy "Authenticated users can delete dashboard showcase stats"
  on dashboard_showcase_stats for delete to authenticated
  using (true);

-- Allows anyone to read the dashboard showcase rows.
create policy "Anyone can read dashboard showcase rows"
  on dashboard_showcase_rows for select to anon, authenticated
  using (true);

-- Allows authenticated users to insert dashboard showcase rows.
create policy "Authenticated users can insert dashboard showcase rows"
  on dashboard_showcase_rows for insert to authenticated
  with check (true);

-- Allows authenticated users to update dashboard showcase rows.
create policy "Authenticated users can update dashboard showcase rows"
  on dashboard_showcase_rows for update to authenticated
  using (true)
  with check (true);

-- Allows authenticated users to delete dashboard showcase rows.
create policy "Authenticated users can delete dashboard showcase rows"
  on dashboard_showcase_rows for delete to authenticated
  using (true);

insert into dashboard_showcase_stats (value, label, sort_order) values
  ('128', 'Assignments open', 0),
  ('94%', 'On-time closure', 1),
  ('312', 'Follow-ups tracked', 2);

insert into dashboard_showcase_rows (label, percent, tone, sort_order) values
  ('ISO 27001 — Access control review', 88, 'verified', 0),
  ('Vendor logistics audit — Plant 4', 42, 'flag', 1),
  ('Franchisee compliance — West zone', 10, 'muted', 2),
  ('Sales & distribution — Region 2', 100, 'verified', 3);
