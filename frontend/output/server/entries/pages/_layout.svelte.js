import { c as create_ssr_component, e as escape, a as add_attribute, b as compute_slots, s as setContext, d as compute_rest_props, f as createEventDispatcher, g as getContext, h as subscribe, i as spread, j as escape_object, k as is_void, v as validate_component, l as each } from "../../chunks/index2.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const themeGoldNouveau = "";
const all = "";
const app = "";
const cBase$2 = "flex flex-col space-y-4";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0)
    $$bindings.gridColumns(gridColumns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0)
    $$bindings.regionRowMain(regionRowMain);
  if ($$props.regionRowHeadline === void 0 && $$bindings.regionRowHeadline && regionRowHeadline !== void 0)
    $$bindings.regionRowHeadline(regionRowHeadline);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0)
    $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0)
    $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$2} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`;
  classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
  classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
  classesSlotLead = `${cSlotLead} ${slotLead}`;
  classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
  classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="app-bar" role="toolbar"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}>
	<div class="${"app-bar-row-main " + escape(classesRowMain, true)}">
		${$$slots.lead ? `<div class="${"app-bar-slot-lead " + escape(classesSlotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
		
		<div class="${"app-bar-slot-default " + escape(classesSlotDefault, true)}">${slots.default ? slots.default({}) : ``}</div>
		
		${$$slots.trail ? `<div class="${"app-bar-slot-trail " + escape(classesSlotTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>
	
	${$$slots.headline ? `<div class="${"app-bar-row-headline " + escape(classesRowHeadline, true)}">${slots.headline ? slots.headline({}) : ``}</div>` : ``}</div>`;
});
const cBase$1 = "grid grid-rows-[auto_1fr_auto] overflow-y-auto";
const AppRail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { selected = writable(void 0) } = $$props;
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { active = "bg-primary-active-token" } = $$props;
  let { hover = "bg-primary-hover-token" } = $$props;
  let { width = "w-[70px] sm:w-20" } = $$props;
  let { height = "h-full" } = $$props;
  let { gap = "gap-0" } = $$props;
  let { regionLead = "" } = $$props;
  let { regionDefault = "" } = $$props;
  let { regionTrail = "" } = $$props;
  setContext("selected", selected);
  setContext("active", active);
  setContext("hover", hover);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionDefault === void 0 && $$bindings.regionDefault && regionDefault !== void 0)
    $$bindings.regionDefault(regionDefault);
  if ($$props.regionTrail === void 0 && $$bindings.regionTrail && regionTrail !== void 0)
    $$bindings.regionTrail(regionTrail);
  classesBase = `${cBase$1} ${background} ${border} ${width} ${height} ${gap} ${$$props.class || ""}`;
  return `

<div class="${"app-rail " + escape(classesBase, true)}">
	<div class="${"app-bar-lead " + escape(regionLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>
	
	<div class="${"app-bar-default " + escape(regionDefault, true)}">${slots.default ? slots.default({}) : ``}</div>
	
	<div class="${"app-bar-trail " + escape(regionTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div></div>`;
});
const cBase = "unstyled grid place-content-center place-items-center w-full aspect-square space-y-1.5 cursor-pointer";
const cLabel = "font-bold text-xs text-center";
const AppRailTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesActive;
  let classesBase;
  let classesLabel;
  let $$restProps = compute_rest_props($$props, ["value", "tag", "label", "regionIcon", "regionLabel", "selected", "active", "hover"]);
  let $$slots = compute_slots(slots);
  let $selected, $$unsubscribe_selected;
  createEventDispatcher();
  let { value = void 0 } = $$props;
  let { tag = "button" } = $$props;
  let { label = "" } = $$props;
  let { regionIcon = "" } = $$props;
  let { regionLabel = "" } = $$props;
  let { selected = getContext("selected") } = $$props;
  $$unsubscribe_selected = subscribe(selected, (value2) => $selected = value2);
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.regionIcon === void 0 && $$bindings.regionIcon && regionIcon !== void 0)
    $$bindings.regionIcon(regionIcon);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  classesActive = $selected && value && $selected === value ? `${active}` : "";
  classesBase = `${cBase} ${hover} ${classesActive} ${$$props.class || ""}`;
  classesLabel = `${cLabel} ${regionLabel}`;
  $$unsubscribe_selected();
  return `

<div>
	
	${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object(prunedRestProps()),
        {
          class: "app-rail-tile " + escape(classesBase, true)
        }
      ],
      {}
    )}>${is_void(tag$1) ? "" : `
		${$$slots.default ? `<div class="${"app-rail-tile-icon " + escape(regionIcon, true)}">${slots.default ? slots.default({}) : ``}</div>` : ``}
		
		${label ? `<div class="${"app-rail-tile-label " + escape(classesLabel, true)}">${escape(label)}</div>` : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}</div>`;
});
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesheader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
    $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesheader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell">
	${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesheader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}

	
	<div class="${"flex-auto " + escape(cContentArea, true)}">
		${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}

		
		<div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}">
			${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}

			
			<main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>

			
			${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>

		
		${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>

	
	${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
    ${validate_component(AppBar, "AppBar").$$render($$result, {}, {}, {
    trail: () => {
      return `<a class="btn btn-sm variant-ghost-surface" href="" target="" rel="">Discord
            </a>
            <a class="btn btn-sm variant-ghost-surface" href="" target="_blank" rel="noreferrer">Blog
            </a>
            <a class="btn btn-sm variant-ghost-surface" href="" target="_blank" rel="noreferrer"><i class="fa fa-cog" aria-hidden="true"></i></a>
            <a href="/"></a>
            <a href="" target="_blank" rel="noreferrer">Login
            </a>
        `;
    },
    lead: () => {
      return `<strong class="text-xl uppercase">Delamain Automation</strong>`;
    }
  })}`;
});
const menuNavLinks = [
  //Workflow
  {
    id: "workflow",
    title: "Workflow",
    list: [
      { href: "/workflow/overview", label: "Overview", keywords: "workflow, schedule, plan" }
    ]
  },
  // Accounting tools
  {
    id: "accounting",
    title: "Accounting",
    list: [
      { href: "/accounting/overview", label: "Overview", keywords: "accounting, accumulated, depreciation" },
      { href: "/accounting/asset", label: "Asset", keywords: "accounting, asset" },
      { href: "/accounting/accu-depre", label: "Depreciation", keywords: "accounting, accumulated, depreciation" },
      { href: "/accounting/fs", label: "Balance Sheet", keywords: "accounting, balance sheet" }
    ]
  },
  // Financial Tools
  {
    id: "finance",
    title: "Finance",
    list: [
      { href: "/finance/overview", label: "Overview", keywords: "finance, overview" },
      { href: "/finance/fair-value", label: "Valuation", keywords: "finance, financial, statement" },
      { href: "/finance/sales-forecast", label: "Sales Forecast", keywords: "finance, financial, statement" },
      { href: "/finance/prof-max", label: "Profit Maximization", keywords: "finance, financial, statement" },
      { href: "/finance/cost-min", label: "Cost Minimization", keywords: "finance, financial, statement" }
    ]
  },
  // Automation Tools
  {
    id: "automation",
    title: "Automation",
    list: [
      { href: "/automation/pdf-tool", label: "PDF Tools", keywords: "automation, overview" },
      { href: "/automation/email-tool", label: "Email Automation Tools", keywords: "automation, automation" },
      { href: "/automation/md-gen", label: "MD Generator", keywords: "automation, automation" },
      { href: "/automation/invoice-gen", label: "Invoicing Tools", keywords: "automation, automation" }
    ]
  }
];
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serialize ?? JSON;
  options?.storage ?? "local";
  return stores[key];
}
const storeCurrentUrl = writable(void 0);
localStorageStore("onboardingMethod");
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesActive;
  let $storeCurrentUrl, $$unsubscribe_storeCurrentUrl;
  let $storeCategory, $$unsubscribe_storeCategory;
  $$unsubscribe_storeCurrentUrl = subscribe(storeCurrentUrl, (value) => $storeCurrentUrl = value);
  let { embedded = false } = $$props;
  const storeCategory = writable("workflow");
  $$unsubscribe_storeCategory = subscribe(storeCategory, (value) => $storeCategory = value);
  let filteredMenuNavLinks = menuNavLinks;
  function setNavCategory(c) {
    if (c === "blog")
      return;
    storeCategory.set(c);
    switch ($storeCategory) {
      case "workflow":
        filteredMenuNavLinks = menuNavLinks.filter((linkSet) => ["workflow"].includes(linkSet.id));
        break;
      case "accounting":
        filteredMenuNavLinks = menuNavLinks.filter((linkSet) => ["accounting"].includes(linkSet.id));
        break;
      case "finance":
        filteredMenuNavLinks = menuNavLinks.filter((linkSet) => ["finance"].includes(linkSet.id));
        break;
      case "automation":
        filteredMenuNavLinks = menuNavLinks.filter((linkSet) => ["automation"].includes(linkSet.id));
        break;
    }
  }
  page.subscribe((p) => {
    let pathMatch = p.url.pathname.split("/")[1];
    if (!pathMatch)
      return;
    setNavCategory(pathMatch);
  });
  storeCategory.subscribe((c) => setNavCategory(c));
  if ($$props.embedded === void 0 && $$bindings.embedded && embedded !== void 0)
    $$bindings.embedded(embedded);
  classesActive = (href) => $storeCurrentUrl?.includes(href) ? "bg-primary-active-token" : "";
  $$unsubscribe_storeCurrentUrl();
  $$unsubscribe_storeCategory();
  return `
<div class="${"grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 " + escape($$props.class ?? "", true)}">${validate_component(AppRail, "AppRail").$$render(
    $$result,
    {
      selected: storeCategory,
      class: "border-r border-surface-500/30"
    },
    {},
    {
      default: () => {
        return `${validate_component(AppRailTile, "AppRailTile").$$render($$result, { label: "Workflow", value: "workflow" }, {}, {
          default: () => {
            return `<i class="fa-duotone fa-arrows-spin"></i>`;
          }
        })}
    	${validate_component(AppRailTile, "AppRailTile").$$render($$result, { label: "Accounting", value: "accounting" }, {}, {
          default: () => {
            return `(icon)`;
          }
        })}
    	${validate_component(AppRailTile, "AppRailTile").$$render($$result, { label: "Finance", value: "finance" }, {}, {
          default: () => {
            return `(icon)`;
          }
        })}
        ${validate_component(AppRailTile, "AppRailTile").$$render($$result, { label: "Automation", value: "automation" }, {}, {
          default: () => {
            return `(icon)`;
          }
        })}`;
      }
    }
  )}


	<section class="p-4 pb-20 space-y-4 overflow-y-auto w-64">${each(filteredMenuNavLinks, ({ id, title, list }, i) => {
    return `${list.length > 0 ? `
				<div${add_attribute("id", id, 0)} class="text-primary-700 dark:text-primary-500 font-bold uppercase px-4">${escape(title)}</div>
				
				<nav class="list-nav"><ul>${each(list, ({ href, label, badge }) => {
      return `<li><a${add_attribute("href", href, 0)}${add_attribute("class", classesActive(href), 0)} data-sveltekit-preload-data="hover"><span class="flex-auto"><!-- HTML_TAG_START -->${label}<!-- HTML_TAG_END --></span>
									${badge ? `<span class="badge variant-filled-secondary">${escape(badge)}</span>` : ``}</a>
							</li>`;
    })}
					</ul></nav>
				
				${i + 1 < filteredMenuNavLinks.length ? `<hr class="!my-6 opacity-50">` : ``}` : ``}`;
  })}</section></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(AppShell, "AppShell").$$render(
    $$result,
    {
      slotSidebarLeft: "bg-surface-500/5 w-auto"
    },
    {},
    {
      footer: () => {
        return `
		
	`;
      },
      sidebarLeft: () => {
        return `
		${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}

	`;
      },
      header: () => {
        return `
		${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	`;
      },
      default: () => {
        return `
	
	
	


	
	
	${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
export {
  Layout as default
};
