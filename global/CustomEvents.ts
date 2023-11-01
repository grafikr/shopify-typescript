export type CustomEvents = {
  /** The theme editor preview inspector has been activated */
  'shopify:inspector:activate': undefined;

  /** The theme editor preview inspector has been deactivated */
  'shopify:inspector:deactivate': undefined;

  /** A section has been added or re-rendered */
  'shopify:section:load': { sectionId: string };

  /** A section has been deleted or is being re-rendered */
  'shopify:section:unload': { sectionId: string };

  /** The user has selected the section in the sidebar */
  'shopify:section:select': {
    sectionId: string;
    load: boolean;
  };

  /** The user has deselected the section in the sidebar.	 */
  'shopify:section:deselect': { sectionId: string };

  /** A section has been reordered */
  'shopify:section:reorder': { sectionId: string };

  /** The user has selected the block in the sidebar */
  'shopify:block:select': {
    blockId: string;
    sectionId: string;
    load: boolean;
  };

  /** User has deselected the block in the sidebar */
  'shopify:block:deselect': {
    blockId: string;
    sectionId: string;
  };
};
