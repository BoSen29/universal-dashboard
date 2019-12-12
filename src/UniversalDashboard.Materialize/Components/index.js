require('materialize-css/dist/css/materialize.min.css');

import TabContainer from './tabs';
import UDTable from "./ud-table";
import UDButton from './ud-button';
import UDChart from './ud-chart';
import UDCounter from './ud-counter';
import UDErrorCard from './error-card';
import UDGrid from './ud-grid';
import UDLink from './ud-link';
import UdImageCarousel from './ud-image-carousel';
import UDNavbar from './ud-navbar';
import UDNavigation from './ud-navigation';
import UdFooter from './ud-footer';
import UdInput from './ud-input';
import UdInputField from './ud-input-field';
import UdMonitor from './ud-monitor';
import UDModal from './ud-modal';
import UDCheckbox from './ud-checkbox';
import UDCollapsible from './ud-collapsible';
import UDSelect from './ud-select';
import UDGridLayout from './ud-grid-layout';
import UDFab from './ud-fab';
import UDTreeView from './ud-treeview';

UniversalDashboard.register("ud-table", UDTable);
UniversalDashboard.register("ud-button", UDButton);
UniversalDashboard.register("ud-chart", UDChart);
UniversalDashboard.register("ud-counter", UDCounter);
UniversalDashboard.register("tab-container", TabContainer);
UniversalDashboard.register("image-carousel", UdImageCarousel);
UniversalDashboard.register("ud-errorcard", UDErrorCard);
UniversalDashboard.register("ud-grid", UDGrid);
UniversalDashboard.register("ud-footer", UdFooter);
UniversalDashboard.register("ud-link", UDLink);
UniversalDashboard.register("ud-monitor", UdMonitor);
UniversalDashboard.register("ud-navbar", UDNavbar);
UniversalDashboard.register("ud-udnavigation", UDNavigation);
UniversalDashboard.register("ud-input", UdInput);
UniversalDashboard.register("ud-input-field", UdInputField);
UniversalDashboard.register("ud-modal", UDModal);
UniversalDashboard.register("ud-checkbox", UDCheckbox);
UniversalDashboard.register("ud-collapsible", UDCollapsible);
UniversalDashboard.register("ud-select", UDSelect);
UniversalDashboard.register("ud-grid-layout", UDGridLayout);
UniversalDashboard.register("ud-fab", UDFab);
UniversalDashboard.register("ud-treeview", UDTreeView);
