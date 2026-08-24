import React from 'react';
import {
  FolderGit2,
  BrainCircuit,
  GraduationCap,
  Cpu,
  Sparkles,
  Wrench,
  Rocket,
  Code2,
  BarChart3,
  Network,
  Lightbulb,
  Zap,
  Users,
  Compass,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  FileText,
  ChevronRight,
  Download,
  Check,
  Copy,
  Sun,
  Moon,
  Menu,
  X,
  Layers,
  Radio,
  Activity,
  CheckCircle2,
  Volume2,
  Trash2,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

const iconMap: Record<string, React.FC<LucideProps>> = {
  FolderGit2,
  BrainCircuit,
  GraduationCap,
  Cpu,
  Sparkles,
  Wrench,
  Rocket,
  Code2,
  BarChart3,
  Network,
  Lightbulb,
  Zap,
  Users,
  Compass,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  FileText,
  ChevronRight,
  Download,
  Check,
  Copy,
  Sun,
  Moon,
  Menu,
  X,
  Layers,
  Radio,
  Activity,
  CheckCircle2,
  Volume2,
  Trash2,
  ShieldCheck,
  ArrowUpRight,
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent {...props} />;
};
