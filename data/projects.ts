export interface Projects {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    image?: string;
    gif?: string;
    vidoe?: string;
}

export const projects: Projects[] = [
    {
        id: 1,
        title: "Webserv",
        description: "HTTP server implementation in C++ with request parsing and multi-client support",
        technologies: ["C++", "HTTP Protocol", "Socket Programming"],
        githubUrl: "https://github.com/dubu13/webserv"
    },

    {
        id: 2,
        title: "Minishell",
        description: "UNIX shell implementation with piping, redirections, and built-in commands",
        technologies: ["C", "UNIX", "Process Management"],
        githubUrl: "https://github.com/dubu13/minishell"
    },

    {
        id: 3,
        title: "Inception",
        description: "Multi-service infrastructure setup using Docker containers",
        technologies: ["Docker", "Docker Compose", "DevOps", "Nginx"],
        githubUrl: "https://github.com/dubu13/inception"
    }
];