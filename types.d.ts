

export interface User {
    createdAt: string;
    email: string;
    emailVerified: string | null;
    favoriteIds: string[];
    hashedPassword: string | null;
    id: string;
    image: string;
    name: string;
    updatedAt: string;
  }
  
  // Example usage:

  

export  interface Movie {
    description: string;
    duration: string;
    genre: string;
    id: string;
    thumbnailUrl: string;
    title: string;
    videoUrl: string;
  }