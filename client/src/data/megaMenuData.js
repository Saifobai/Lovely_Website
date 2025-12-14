import {
    BookOpen,
    Code,
    Layout,
    PlayCircle,
    Grid,
    MessageSquare,
    Newspaper
} from "lucide-react";

export const megaMenuData = {
    enterprise: {
        label: "Enterprise Software",
        items: [
            {
                icon: BookOpen,
                title: "Documentation",
                description: "Comprehensive guides and API references for teams.",
                linkText: "Browse Docs",
                href: "/docs"
            },
            {
                icon: PlayCircle,
                title: "Video Tutorials",
                description: "Step-by-step onboarding and advanced tutorials.",
                linkText: "Watch Tutorials",
                href: "/tutorials"
            }
        ]
    },

    development: {
        label: "Development Tools",
        items: [
            {
                icon: Code,
                title: "SDKs & APIs",
                description: "Powerful APIs to build and scale applications.",
                linkText: "Explore APIs",
                href: "/apis"
            },
            {
                icon: Layout,
                title: "UI Components",
                description: "Pre-built UI components for faster development.",
                linkText: "View Components",
                href: "/components"
            }
        ]
    },

    creative: {
        label: "Creative Suite",
        items: [
            {
                icon: Grid,
                title: "Design System",
                description: "Brand guidelines and design assets.",
                linkText: "View System",
                href: "/design-system"
            }
        ]
    },

    resources: {
        label: "Resources",
        items: [
            {
                icon: MessageSquare,
                title: "Community",
                description: "Ask questions and connect with other users.",
                linkText: "Join Community",
                href: "/community"
            },
            {
                icon: Newspaper,
                title: "Blog",
                description: "Latest articles, updates, and announcements.",
                linkText: "Read Blog",
                href: "/blog"
            }
        ]
    }
};
