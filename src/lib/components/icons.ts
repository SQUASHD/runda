import {
	AlertTriangle,
	ArrowRight,
	ChevronLeft,
	ChevronRight,
	Command,
	CreditCard,
	File,
	FileText,
	HelpCircle,
	Image,
	Laptop,
	Loader2,
	Moon,
	MoreVertical,
	Pizza,
	Plus,
	Settings,
	SunMedium,
	Trash,
	User,
	X,
	type Icon as LucideIcon
} from 'lucide-svelte';

export type Icon = LucideIcon;

export const Icons = {
	logo: Command,
	close: X,
	spinner: Loader2,
	chevronLeft: ChevronLeft,
	chevronRight: ChevronRight,
	trash: Trash,
	post: FileText,
	page: File,
	media: Image,
	settings: Settings,
	billing: CreditCard,
	ellipsis: MoreVertical,
	add: Plus,
	warning: AlertTriangle,
	user: User,
	arrowRight: ArrowRight,
	help: HelpCircle,
	pizza: Pizza,
	sun: SunMedium,
	moon: Moon,
	laptop: Laptop
};
