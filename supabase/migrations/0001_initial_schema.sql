create table leads (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  work_email text not null,
  phone text,
  company text,
  org_type text check (org_type in ('consulting_firm','in_house','other')),
  message text,
  source_page text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  crm_synced boolean default false,
  crm_contact_id text,
  created_at timestamptz default now()
);

create table newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  source_page text,
  crm_synced boolean default false,
  created_at timestamptz default now()
);

create table blog_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null
);

create table blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category_id uuid references blog_categories(id),
  excerpt text,
  body_markdown text not null,
  cover_image_url text,
  author_name text default 'Sameeksha Team',
  published boolean default false,
  published_at timestamptz,
  meta_description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table leads enable row level security;
alter table newsletter_subscribers enable row level security;
alter table blog_categories enable row level security;
alter table blog_posts enable row level security;

-- Allows service_role to insert leads.
create policy "Service role can insert leads"
  on leads for insert to service_role
  with check (true);

-- Allows service_role to insert newsletter subscribers.
create policy "Service role can insert newsletter subscribers"
  on newsletter_subscribers for insert to service_role
  with check (true);

-- Allows anyone to read published blog posts.
create policy "Anyone can read published blog posts"
  on blog_posts for select to anon, authenticated
  using (published = true);

-- Allows authenticated users to insert blog posts.
create policy "Authenticated users can insert blog posts"
  on blog_posts for insert to authenticated
  with check (true);

-- Allows authenticated users to update blog posts.
create policy "Authenticated users can update blog posts"
  on blog_posts for update to authenticated
  using (true)
  with check (true);

-- Allows authenticated users to delete blog posts.
create policy "Authenticated users can delete blog posts"
  on blog_posts for delete to authenticated
  using (true);

-- Allows anyone to read blog categories.
create policy "Anyone can read blog categories"
  on blog_categories for select to anon, authenticated
  using (true);

-- Allows authenticated users to insert blog categories.
create policy "Authenticated users can insert blog categories"
  on blog_categories for insert to authenticated
  with check (true);

-- Allows authenticated users to update blog categories.
create policy "Authenticated users can update blog categories"
  on blog_categories for update to authenticated
  using (true)
  with check (true);

-- Allows authenticated users to delete blog categories.
create policy "Authenticated users can delete blog categories"
  on blog_categories for delete to authenticated
  using (true);

create function update_blog_posts_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger blog_posts_updated_at
before update on blog_posts
for each row
execute function update_blog_posts_updated_at();