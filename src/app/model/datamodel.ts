export interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    repos : Repos[];
}

export interface Repos {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private?: boolean;
    description: string;
    fork?: boolean;
    created_at: string;
    updated_at:string;
    pushed_at: string;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues?: boolean;
    has_projects?: boolean;
    has_downloads?: boolean;
    has_wiki?: boolean;
    has_pages?: boolean;
    forks_count: number;
    mirror_url?: string | null;
    archived?: boolean;
    disabled?: boolean;
    open_issues_count: number;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string | null;
}
