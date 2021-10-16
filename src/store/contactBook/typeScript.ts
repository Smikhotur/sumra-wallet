export interface ContactBookState {
  users: any[];
  data: any[];
  searchPeople: any[];
  addPagination: any[];
  groups: any[];
  oneUser: any[];
  idPerson: any[];
  searchText: string;
  sendLetter: string;
  idUser: string;
  filterGroups: string;
  reverse: boolean;
  openContactDetails: boolean;
  modal: boolean;
  download: number;
}

export interface ContactBookAction {
  users: any[];
  data: any[];
  searchPeople: any[];
  addPagination: any[];
  groups: any[];
  oneUser: any[];
  idPerson: any[];
  searchText: string;
  filterGroups: string;
  sendLetter: string;
  idUser: string;
  type: string;
  reverse: boolean;
  openContactDetails: boolean;
  modal: boolean;
  download: number;
}
