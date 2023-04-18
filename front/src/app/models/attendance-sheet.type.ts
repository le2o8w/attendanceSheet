export interface AttendanceSheet {
    START: string;
    END: string;
    DATE_CREATED: string;
    DATE_UPDATED: string;
    ID: string;
    NAME: string;
    STUDENTS: Student[];
}

export interface Student {
    id: number;
    presenceState: boolean;
    signatureTimestamp: string;
    signature: string;
    comment: string;
    dateCreated: string;
    dateUpdated: string;
    EDITED: boolean;
    FIRSTNAME: string;
    LASTNAME: string;
}