import { ReactComponent as DashHomeIcon } from "assets/icons/dash_nav_home.svg";
import { ReactComponent as DashInventoryIcon } from "assets/icons/dash_nav_inventory.svg";
import { ReactComponent as DashQuestsIcon } from "assets/icons/dash_nav_quests.svg";
import { ReactComponent as DashMintIcon } from "assets/icons/dash_nav_mint.svg";
import { ReactComponent as DashRewardsIcon } from "assets/icons/dash_nav_rewards.svg";
import { ReactComponent as DashInvitesIcon } from "assets/icons/dash_nav_invites.svg";

import DashboardHome from 'components/Dashboard/DashboardHome/DashboardHome';
import DashboardMint from 'components/Dashboard/DashboardMint/DashboardMint';
import DashboardQuests from 'components/Dashboard/DashboardQuests/DashboardQuests';
import DashboardInventory from 'components/Dashboard/DashboardInventory/DashboardInventory';
import DashboardRewards from 'components/Dashboard/DashboardRewards/DashboardRewards';
import DashboardInvites from 'components/Dashboard/DashboardInvites/DashboardInvites';
import DashboardMissions from 'components/Dashboard/DashboardMissions/DashboardMissions';

export const DASHBOARD_PATH = '/dashboard';
export const dashRoutes = [
  {
    to: '/home',
    iconComponent: DashHomeIcon,
    nav: true,
    label: 'home',
    component: DashboardHome
  },
  {
    to: '/mint',
    iconComponent: DashMintIcon,
    nav: true,
    label: 'mint',
    component: DashboardMint
  },
  {
    to: '/quests',
    iconComponent: DashQuestsIcon,
    nav: true,
    label: 'quests',
    component: DashboardQuests
  },
  {
    to: '/quests/:questId/missions',
    iconComponent: DashQuestsIcon,
    nav: false,
    label: 'missions',
    component: DashboardMissions
  },
  {
    to: '/inventory',
    iconComponent: DashInventoryIcon,
    nav: true,
    label: 'inventory',
    component: DashboardInventory
  },
  {
    to: '/rewards',
    iconComponent: DashRewardsIcon,
    nav: true,
    label: 'rewards',
    component: DashboardRewards
  },
  {
    to: '/invites',
    iconComponent: DashInvitesIcon,
    nav: true,
    label: 'invites',
    component: DashboardInvites
  },
]