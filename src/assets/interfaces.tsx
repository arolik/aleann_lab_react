export interface LocationI {
    lat: number;
    long: number;
}

export interface JobI {
    id: string;
    name: string;
    email: string;
    phone: string;
    title: string;
    salary: string;
    address: string;
    benefits: Array<string> | null;
    location: LocationI | null;
    pictures: Array<string> | any;
    createdAt: Date | null;
    updatedAt: Date | null;
    description: string;
    employment_type: Array<string> | null;
}