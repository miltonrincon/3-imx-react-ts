import { ReactComponent as DashHomeIcon } from "assets/icons/dash_nav_home.svg";
import { ReactComponent as DashInventoryIcon } from "assets/icons/dash_nav_inventory.svg";
import { ReactComponent as DashQuestIcon } from "assets/icons/dash_nav_quest.svg";
import { ReactComponent as DashMintIcon } from "assets/icons/dash_nav_mint.svg";
import { ReactComponent as DashRewardsIcon } from "assets/icons/dash_nav_rewards.svg";
import { ReactComponent as DashInvitesIcon } from "assets/icons/dash_nav_invites.svg";

import DashboardHome from 'components/Dashboard/DashboardHome/DashboardHome';
import DashboardMint from 'components/Dashboard/DashboardMint/DashboardMint';
import DashboardQuest from 'components/Dashboard/DashboardQuest/DashboardQuest';
import DashboardInventory from 'components/Dashboard/DashboardInventory/DashboardInventory';
import DashboardRewards from 'components/Dashboard/DashboardRewards/DashboardRewards';
import DashboardInvites from 'components/Dashboard/DashboardInvites/DashboardInvites';

export const DASHBOARD_PATH = '/dashboard';
export const dashRoutes = [
  {
    to: '/home',
    iconComponent: DashHomeIcon,
    label: 'home',
    component: DashboardHome
  },
  {
    to: '/mint',
    iconComponent: DashMintIcon,
    label: 'mint',
    component: DashboardMint
  },
  {
    to: '/quest',
    iconComponent: DashQuestIcon,
    label: 'quest',
    component: DashboardQuest
  },
  {
    to: '/inventory',
    iconComponent: DashInventoryIcon,
    label: 'inventory',
    component: DashboardInventory
  },
  {
    to: '/rewards',
    iconComponent: DashRewardsIcon,
    label: 'rewards',
    component: DashboardRewards
  },
  {
    to: '/invites',
    iconComponent: DashInvitesIcon,
    label: 'invites',
    component: DashboardInvites
  },
]