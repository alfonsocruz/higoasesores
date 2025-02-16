//

import Badge from './Badge';
import Card from './Card';
import Chip from './Chip';
import Fab from './Fab';
import Input from './Input';
import Link from './Link';
import Menu from './Menu';
import Radio from './Radio';
import Rating from './Rating';
import Tabs from './Tabs';
import List from './List';
import Table from './Table';
import Paper from './Paper';
import Alert from './Alert';
import Switch from './Switch';
import Select from './Select';
import Button from './Button';
import Dialog from './Dialog';
import Avatar from './Avatar';
import Slider from './Slider';
import Drawer from './Drawer';
import Stepper from './Stepper';
import Tooltip from './Tooltip';
import Popover from './Popover';
import SvgIcon from './SvgIcon';
import Checkbox from './Checkbox';
import DataGrid from './DataGrid';
import Skeleton from './Skeleton';
import Timeline from './Timeline';
import TreeView from './TreeView';
import Backdrop from './Backdrop';
import Progress from './Progress';
import Accordion from './Accordion';
import Typography from './Typography';
import Pagination from './Pagination';
import ButtonGroup from './ButtonGroup';
import Breadcrumbs from './Breadcrumbs';
import Autocomplete from './Autocomplete';
import ControlLabel from './ControlLabel';
import ToggleButton from './ToggleButton';
import LoadingButton from './LoadingButton';
// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Fab(theme),
    Tabs(theme),
    Chip(theme),
    Card(theme),
    Menu(theme),
    Link(theme),
    Input(theme),
    Radio(theme),
    Badge(theme),
    List(theme),
    Table(theme),
    Paper(theme),
    Alert(theme),
    Switch(theme),
    Select(theme),
    Button(theme),
    Rating(theme),
    Dialog(theme),
    Avatar(theme),
    Slider(theme),
    Drawer(theme),
    Stepper(theme),
    Tooltip(theme),
    Popover(theme),
    SvgIcon(theme),
    Checkbox(theme),
    DataGrid(theme),
    Skeleton(theme),
    Timeline(theme),
    TreeView(theme),
    Backdrop(theme),
    Progress(theme),
    Accordion(theme),
    Typography(theme),
    Pagination(theme),
    ButtonGroup(theme),
    Breadcrumbs(theme),
    Autocomplete(theme),
    ControlLabel(theme),
    ToggleButton(theme),
    LoadingButton(theme)
  );
}
