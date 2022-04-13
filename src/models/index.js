// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrgStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const Severity = {
  "HIGH": "HIGH",
  "MEDIUM": "MEDIUM",
  "LOW": "LOW"
};

const { OrgCategory, Category, IncidentCategory, CommunicationModes, Organization, Volunteer, IncidentRequesterVolunteerXRef, IncidentActivity, Incident, Requester } = initSchema(schema);

export {
  OrgCategory,
  Category,
  IncidentCategory,
  CommunicationModes,
  Organization,
  Volunteer,
  IncidentRequesterVolunteerXRef,
  IncidentActivity,
  Incident,
  Requester,
  OrgStatus,
  Severity
};