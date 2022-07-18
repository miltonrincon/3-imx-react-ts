import { ReactComponent as DashHomeIcon } from "assets/icons/dash_nav_home.svg";
import { ReactComponent as DashInventoryIcon } from "assets/icons/dash_nav_inventory.svg";
import { ReactComponent as DashQuestIcon } from "assets/icons/dash_nav_quest.svg";
import { ReactComponent as DashVialIcon } from "assets/icons/dash_nav_vial.svg";
import { ReactComponent as DashRewardsIcon } from "assets/icons/dash_nav_rewards.svg";
import { ReactComponent as DashInvitesIcon } from "assets/icons/dash_nav_invites.svg";

import DashboardHome from 'components/DashboardHome/DashboardHome';
import DashboardVial from 'components/DashboardVial/DashboardVial';
import DashboardQuest from 'components/DashboardQuest/DashboardQuest';
import DashboardInventory from 'components/DashboardInventory/DashboardInventory';
import DashboardRewards from 'components/DashboardRewards/DashboardRewards';
import DashboardInvites from 'components/DashboardInvites/DashboardInvites';

export const dashRoutes = [
  {
    to: '/dashboard/home',
    iconComponent: DashHomeIcon,
    label: 'home',
    component: DashboardHome
  },
  {
    to: '/dashboard/vial',
    iconComponent: DashVialIcon,
    label: 'vial',
    component: DashboardVial
  },
  {
    to: '/dashboard/quest',
    iconComponent: DashQuestIcon,
    label: 'quest',
    component: DashboardQuest
  },
  {
    to: '/dashboard/inventory',
    iconComponent: DashInventoryIcon,
    label: 'inventory',
    component: DashboardInventory
  },
  {
    to: '/dashboard/rewards',
    iconComponent: DashRewardsIcon,
    label: 'rewards',
    component: DashboardRewards
  },
  {
    to: '/dashboard/invites',
    iconComponent: DashInvitesIcon,
    label: 'invites',
    component: DashboardInvites
  },
]