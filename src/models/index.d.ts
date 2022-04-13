import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum OrgStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

export enum Severity {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW"
}



type OrgCategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IncidentCategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommunicationModesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrganizationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VolunteerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IncidentRequesterVolunteerXRefMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IncidentActivityMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IncidentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RequesterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class OrgCategory {
  readonly id: string;
  readonly categoryID: string;
  readonly organizationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<OrgCategory, OrgCategoryMetaData>);
  static copyOf(source: OrgCategory, mutator: (draft: MutableModel<OrgCategory, OrgCategoryMetaData>) => MutableModel<OrgCategory, OrgCategoryMetaData> | void): OrgCategory;
}

export declare class Category {
  readonly id: string;
  readonly Name?: string | null;
  readonly OrgCategories?: (OrgCategory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class IncidentCategory {
  readonly id: string;
  readonly Name?: string | null;
  readonly Desc?: string | null;
  readonly Attribute1?: string | null;
  readonly Attribute2?: string | null;
  readonly Attribute3?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<IncidentCategory, IncidentCategoryMetaData>);
  static copyOf(source: IncidentCategory, mutator: (draft: MutableModel<IncidentCategory, IncidentCategoryMetaData>) => MutableModel<IncidentCategory, IncidentCategoryMetaData> | void): IncidentCategory;
}

export declare class CommunicationModes {
  readonly id: string;
  readonly Phone?: string | null;
  readonly Video?: string | null;
  readonly Other?: string | null;
  readonly incidentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CommunicationModes, CommunicationModesMetaData>);
  static copyOf(source: CommunicationModes, mutator: (draft: MutableModel<CommunicationModes, CommunicationModesMetaData>) => MutableModel<CommunicationModes, CommunicationModesMetaData> | void): CommunicationModes;
}

export declare class Organization {
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly Phone?: string | null;
  readonly WebURL?: string | null;
  readonly Desc?: string | null;
  readonly Status?: OrgStatus | keyof typeof OrgStatus | null;
  readonly Attribute1?: string | null;
  readonly Attribute2?: string | null;
  readonly Attribute3?: string | null;
  readonly Volunteers?: (Volunteer | null)[] | null;
  readonly OrgCategories?: (OrgCategory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Organization, OrganizationMetaData>);
  static copyOf(source: Organization, mutator: (draft: MutableModel<Organization, OrganizationMetaData>) => MutableModel<Organization, OrganizationMetaData> | void): Organization;
}

export declare class Volunteer {
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly Age?: number | null;
  readonly Phone?: string | null;
  readonly Attribute1?: string | null;
  readonly Attribute2?: string | null;
  readonly Attribute3?: string | null;
  readonly Created?: string | null;
  readonly Updated?: string | null;
  readonly organizationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Volunteer, VolunteerMetaData>);
  static copyOf(source: Volunteer, mutator: (draft: MutableModel<Volunteer, VolunteerMetaData>) => MutableModel<Volunteer, VolunteerMetaData> | void): Volunteer;
}

export declare class IncidentRequesterVolunteerXRef {
  readonly id: string;
  readonly IncidentId?: string | null;
  readonly VolunteerId?: string | null;
  readonly RequesterId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<IncidentRequesterVolunteerXRef, IncidentRequesterVolunteerXRefMetaData>);
  static copyOf(source: IncidentRequesterVolunteerXRef, mutator: (draft: MutableModel<IncidentRequesterVolunteerXRef, IncidentRequesterVolunteerXRefMetaData>) => MutableModel<IncidentRequesterVolunteerXRef, IncidentRequesterVolunteerXRefMetaData> | void): IncidentRequesterVolunteerXRef;
}

export declare class IncidentActivity {
  readonly id: string;
  readonly Activity_XRef?: string | null;
  readonly Desc?: string | null;
  readonly Category?: string | null;
  readonly Status?: string | null;
  readonly Created?: string | null;
  readonly Updated?: string | null;
  readonly ActorId?: string | null;
  readonly Attribute1?: string | null;
  readonly Attribute2?: string | null;
  readonly Attribute3?: string | null;
  readonly incidentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<IncidentActivity, IncidentActivityMetaData>);
  static copyOf(source: IncidentActivity, mutator: (draft: MutableModel<IncidentActivity, IncidentActivityMetaData>) => MutableModel<IncidentActivity, IncidentActivityMetaData> | void): IncidentActivity;
}

export declare class Incident {
  readonly id: string;
  readonly Date?: string | null;
  readonly Desc?: string | null;
  readonly Category?: string | null;
  readonly Severity?: Severity | keyof typeof Severity | null;
  readonly Ack?: string | null;
  readonly Status?: string | null;
  readonly Attribute1?: string | null;
  readonly Attribute2?: string | null;
  readonly Attribute3?: string | null;
  readonly IncidentActivities?: (IncidentActivity | null)[] | null;
  readonly CommunicationModes?: (CommunicationModes | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Incident, IncidentMetaData>);
  static copyOf(source: Incident, mutator: (draft: MutableModel<Incident, IncidentMetaData>) => MutableModel<Incident, IncidentMetaData> | void): Incident;
}

export declare class Requester {
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly Age?: number | null;
  readonly Attribute1?: string | null;
  readonly Attribute2?: string | null;
  readonly Attribute3?: string | null;
  readonly Phone?: string | null;
  readonly Created?: string | null;
  readonly Updated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Requester, RequesterMetaData>);
  static copyOf(source: Requester, mutator: (draft: MutableModel<Requester, RequesterMetaData>) => MutableModel<Requester, RequesterMetaData> | void): Requester;
}