import React from 'react';

export enum Status {
  Active = 'Active',
  Pending = 'Pending',
  Completed = 'Completed',
  Cancelled = 'Cancelled'
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  lastVisit: string;
  diagnosis: string;
  status: Status;
  avatar: string;
  notes: string;
}

export type AppointmentStatus = 'Scheduled' | 'Completed' | 'Cancelled';

export interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  type: string;
  status: AppointmentStatus;
  avatar: string;
}

export interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

export interface ChartData {
  name: string;
  visits: number;
  revenue: number;
}