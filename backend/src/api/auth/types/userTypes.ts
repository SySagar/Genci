interface User {
    name: string;
    displayName: string;
    bio: string;
    email: string;
    hashedPassword: string;
    solved: [];
    rating: number;
  }

  export default User;