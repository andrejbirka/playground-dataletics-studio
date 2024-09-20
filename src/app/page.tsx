import Link from "next/link";
import { CollapsibleNavigationSidebarComponent } from "~/components/collapsible-navigation-sidebar";
import { DarkModeDataleticsStudioSidebar } from "~/components/dark-mode-dataletics-studio-sidebar";
import { ImprovedDataleticsStudioSidebar } from "~/components/improved-dataletics-studio-sidebar";
import { IslandNavigation } from "~/components/island-navigation";
import NavigationSidebarComponent from "~/components/navigation-sidebar";
import { PolishedNavigationSidebar } from "~/components/polished-navigation-sidebar";
import { RefinedNavbar } from "~/components/refined-navbar";
import { SeriousDataleticsStudioSidebar } from "~/components/serious-dataletics-studio-sidebar";
import { SideNav } from "~/components/side-nav";
import { SideNavbar } from "~/components/side-navbar";
import { UpdatedCollapsibleNavigationSidebar } from "~/components/updated-collapsible-navigation-sidebar";
    //User This one DarkModeDataleticsStudioSidebar

export default function HomePage() {
  return (
    //User This one DarkModeDataleticsStudioSidebar
    <ImprovedDataleticsStudioSidebar />
  );
}
