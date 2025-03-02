import tinycolor from "tinycolor2";

const mix = (color1: string, color2: string, amount: number): string =>
    tinycolor.mix(color1, color2, amount * 100).toHexString();

const shade = (color: string, magnitude: number): string =>
    magnitude > 0
        ? tinycolor(color)
              .lighten(magnitude * 100)
              .toHexString()
        : tinycolor(color)
              .darken(Math.abs(magnitude * 100))
              .toHexString();

export default ({
    rosewater,
    flamingo,
    pink,
    mauve,
    red,
    maroon,
    peach,
    yellow,
    green,
    teal,
    sky,
    sapphire,
    blue,
    lavender,
    text,
    subtext1,
    subtext0,
    overlay2,
    overlay1,
    overlay0,
    surface2,
    surface1,
    surface0,
    base,
    mantle,
    crust,
    success,
    error,
    accent,
}: {
    [k: string]: string;
}) => ({
    name: "Caelestia",
    type: "dark",
    colors: {
        focusBorder: accent,
        foreground: text,
        disabledForeground: subtext0,
        "widget.shadow": `${mantle}80`,
        "selection.background": `${accent}66`,
        descriptionForeground: text,
        errorForeground: error,
        "icon.foreground": accent,
        "sash.hoverBorder": accent,
        "window.activeBorder": "#00000000",
        "window.inactiveBorder": "#00000000",
        "textBlockQuote.background": mantle,
        "textBlockQuote.border": crust,
        "textCodeBlock.background": base,
        "textLink.activeForeground": sky,
        "textLink.foreground": blue,
        "textPreformat.foreground": text,
        "textSeparator.foreground": accent,
        "activityBar.background": crust,
        "activityBar.foreground": accent,
        "activityBar.dropBorder": `${accent}33`,
        "activityBar.inactiveForeground": overlay0,
        "activityBar.border": "#00000000",
        "activityBarBadge.background": accent,
        "activityBarBadge.foreground": crust,
        "activityBar.activeBorder": "#00000000",
        "activityBar.activeBackground": "#00000000",
        "activityBar.activeFocusBorder": "#00000000",
        "activityBarTop.foreground": accent,
        "activityBarTop.activeBorder": "#00000000",
        "activityBarTop.inactiveForeground": overlay0,
        "activityBarTop.dropBorder": `${accent}33`,
        "badge.background": surface1,
        "badge.foreground": text,
        "breadcrumb.activeSelectionForeground": accent,
        "breadcrumb.background": base,
        "breadcrumb.focusForeground": accent,
        "breadcrumb.foreground": `${text}cc`,
        "breadcrumbPicker.background": mantle,
        "button.background": accent,
        "button.foreground": crust,
        "button.border": "#00000000",
        "button.separator": "#00000000",
        "button.hoverBackground": shade(accent, 0.07),
        "button.secondaryForeground": text,
        "button.secondaryBackground": surface2,
        "button.secondaryHoverBackground": shade(surface2, 0.07),
        "checkbox.background": surface1,
        "checkbox.border": "#00000000",
        "checkbox.foreground": accent,
        "dropdown.background": mantle,
        "dropdown.listBackground": surface2,
        "dropdown.border": accent,
        "dropdown.foreground": text,
        "debugToolBar.background": crust,
        "debugToolBar.border": "#00000000",
        "debugExceptionWidget.background": crust,
        "debugExceptionWidget.border": accent,
        "debugTokenExpression.number": peach,
        "debugTokenExpression.boolean": mauve,
        "debugTokenExpression.string": green,
        "debugTokenExpression.error": error,
        "debugIcon.breakpointForeground": red,
        "debugIcon.breakpointDisabledForeground": `${red}99`,
        "debugIcon.breakpointUnverifiedForeground": mix(red, surface2, 0.5),
        "debugIcon.breakpointCurrentStackframeForeground": surface2,
        "debugIcon.breakpointStackframeForeground": surface2,
        "debugIcon.startForeground": success,
        "debugIcon.pauseForeground": blue,
        "debugIcon.stopForeground": error,
        "debugIcon.disconnectForeground": surface2,
        "debugIcon.restartForeground": teal,
        "debugIcon.stepOverForeground": mauve,
        "debugIcon.stepIntoForeground": text,
        "debugIcon.stepOutForeground": text,
        "debugIcon.continueForeground": success,
        "debugIcon.stepBackForeground": surface2,
        "debugConsole.infoForeground": blue,
        "debugConsole.warningForeground": peach,
        "debugConsole.errorForeground": error,
        "debugConsole.sourceForeground": rosewater,
        "debugConsoleInputIcon.foreground": text,
        "diffEditor.border": surface2,
        "diffEditor.insertedTextBackground": `${success}1a`,
        "diffEditor.removedTextBackground": `${error}1a`,
        "diffEditor.insertedLineBackground": `${success}26`,
        "diffEditor.removedLineBackground": `${error}26`,
        "diffEditor.diagonalFill": `${surface2}99`,
        "diffEditorOverview.insertedForeground": `${success}cc`,
        "diffEditorOverview.removedForeground": `${error}cc`,
        "editor.background": base,
        "editor.findMatchBackground": mix(base, red, 0.3),
        "editor.findMatchBorder": `${red}33`,
        "editor.findMatchHighlightBackground": mix(base, sky, 0.3),
        "editor.findMatchHighlightBorder": `${sky}33`,
        "editor.findRangeHighlightBackground": mix(base, sky, 0.3),
        "editor.findRangeHighlightBorder": `${sky}33`,
        "editor.foldBackground": `${sky}40`,
        "editor.foreground": text,
        "editor.hoverHighlightBackground": `${sky}40`,
        "editor.lineHighlightBackground": `${text}12`,
        "editor.lineHighlightBorder": "#00000000",
        "editor.rangeHighlightBackground": `${sky}40`,
        "editor.rangeHighlightBorder": "#00000000",
        "editor.selectionBackground": `${overlay2}40`,
        "editor.selectionHighlightBackground": `${overlay2}33`,
        "editor.selectionHighlightBorder": `${overlay2}33`,
        "editor.wordHighlightBackground": `${overlay2}33`,
        "editor.wordHighlightStrongBackground": `${blue}33`,
        "editorBracketMatch.background": `${overlay2}1a`,
        "editorBracketMatch.border": overlay2,
        "editorCodeLens.foreground": overlay1,
        "editorCursor.background": base,
        "editorCursor.foreground": rosewater,
        "editorGroup.border": surface2,
        "editorGroup.dropBackground": `${accent}33`,
        "editorGroup.emptyBackground": base,
        "editorGroupHeader.tabsBackground": crust,
        "editorGutter.addedBackground": green,
        "editorGutter.background": base,
        "editorGutter.commentRangeForeground": surface0,
        "editorGutter.commentGlyphForeground": accent,
        "editorGutter.deletedBackground": red,
        "editorGutter.foldingControlForeground": overlay2,
        "editorGutter.modifiedBackground": yellow,
        "editorHoverWidget.background": mantle,
        "editorHoverWidget.border": surface2,
        "editorHoverWidget.foreground": text,
        "editorIndentGuide.activeBackground": surface2,
        "editorIndentGuide.background": surface1,
        "editorInlayHint.foreground": surface2,
        "editorInlayHint.background": `${mantle}bf`,
        "editorInlayHint.typeForeground": subtext1,
        "editorInlayHint.typeBackground": `${mantle}bf`,
        "editorInlayHint.parameterForeground": subtext0,
        "editorInlayHint.parameterBackground": `${mantle}bf`,
        "editorLineNumber.activeForeground": accent,
        "editorLineNumber.foreground": overlay1,
        "editorLink.activeForeground": accent,
        "editorMarkerNavigation.background": mantle,
        "editorMarkerNavigationError.background": error,
        "editorMarkerNavigationInfo.background": blue,
        "editorMarkerNavigationWarning.background": peach,
        "editorOverviewRuler.background": mantle,
        "editorOverviewRuler.border": `${text}12`,
        "editorOverviewRuler.modifiedForeground": yellow,
        "editorRuler.foreground": surface2,
        "editor.stackFrameHighlightBackground": `${yellow}26`,
        "editor.focusedStackFrameHighlightBackground": `${green}26`,
        "editorStickyScrollHover.background": surface0,
        "editorSuggestWidget.background": mantle,
        "editorSuggestWidget.border": surface2,
        "editorSuggestWidget.foreground": text,
        "editorSuggestWidget.highlightForeground": accent,
        "editorSuggestWidget.selectedBackground": surface0,
        "editorWhitespace.foreground": `${overlay2}66`,
        "editorWidget.background": mantle,
        "editorWidget.foreground": text,
        "editorWidget.resizeBorder": surface2,
        "editorLightBulb.foreground": yellow,
        "editorError.foreground": error,
        "editorError.border": "#00000000",
        "editorError.background": "#00000000",
        "editorWarning.foreground": peach,
        "editorWarning.border": "#00000000",
        "editorWarning.background": "#00000000",
        "editorInfo.foreground": blue,
        "editorInfo.border": "#00000000",
        "editorInfo.background": "#00000000",
        "problemsErrorIcon.foreground": error,
        "problemsInfoIcon.foreground": blue,
        "problemsWarningIcon.foreground": peach,
        "extensionButton.prominentForeground": crust,
        "extensionButton.prominentBackground": accent,
        "extensionButton.separator": base,
        "extensionButton.prominentHoverBackground": shade(accent, 0.07),
        "extensionBadge.remoteBackground": blue,
        "extensionBadge.remoteForeground": crust,
        "extensionIcon.starForeground": yellow,
        "extensionIcon.verifiedForeground": green,
        "extensionIcon.preReleaseForeground": surface2,
        "extensionIcon.sponsorForeground": pink,
        "gitDecoration.addedResourceForeground": success,
        "gitDecoration.conflictingResourceForeground": mauve,
        "gitDecoration.deletedResourceForeground": error,
        "gitDecoration.ignoredResourceForeground": overlay0,
        "gitDecoration.modifiedResourceForeground": yellow,
        "gitDecoration.stageDeletedResourceForeground": error,
        "gitDecoration.stageModifiedResourceForeground": yellow,
        "gitDecoration.submoduleResourceForeground": blue,
        "gitDecoration.untrackedResourceForeground": success,
        "input.background": surface0,
        "input.border": "#00000000",
        "input.foreground": text,
        "input.placeholderForeground": `${text}73`,
        "inputOption.activeBackground": surface2,
        "inputOption.activeBorder": accent,
        "inputOption.activeForeground": text,
        "inputValidation.errorBackground": error,
        "inputValidation.errorBorder": `${crust}33`,
        "inputValidation.errorForeground": crust,
        "inputValidation.infoBackground": blue,
        "inputValidation.infoBorder": `${crust}33`,
        "inputValidation.infoForeground": crust,
        "inputValidation.warningBackground": peach,
        "inputValidation.warningBorder": `${crust}33`,
        "inputValidation.warningForeground": crust,
        "list.activeSelectionBackground": surface0,
        "list.activeSelectionForeground": text,
        "list.dropBackground": `${accent}33`,
        "list.focusBackground": surface0,
        "list.focusForeground": text,
        "list.focusOutline": "#00000000",
        "list.highlightForeground": accent,
        "list.hoverBackground": `${surface0}80`,
        "list.hoverForeground": text,
        "list.inactiveSelectionBackground": surface0,
        "list.inactiveSelectionForeground": text,
        "list.warningForeground": peach,
        "listFilterWidget.background": surface1,
        "listFilterWidget.noMatchesOutline": red,
        "listFilterWidget.outline": "#00000000",
        "tree.indentGuidesStroke": overlay2,
        "tree.inactiveIndentGuidesStroke": surface1,
        "menu.background": base,
        "menu.border": `${base}80`,
        "menu.foreground": text,
        "menu.selectionBackground": surface2,
        "menu.selectionBorder": "#00000000",
        "menu.selectionForeground": text,
        "menu.separatorBackground": surface2,
        "menubar.selectionBackground": surface1,
        "menubar.selectionForeground": text,
        "merge.commonContentBackground": surface1,
        "merge.commonHeaderBackground": surface2,
        "merge.currentContentBackground": `${green}33`,
        "merge.currentHeaderBackground": `${green}66`,
        "merge.incomingContentBackground": `${blue}33`,
        "merge.incomingHeaderBackground": `${blue}66`,
        "minimap.background": `${mantle}80`,
        "minimap.findMatchHighlight": `${sky}4d`,
        "minimap.selectionHighlight": `${surface2}bf`,
        "minimap.selectionOccurrenceHighlight": `${surface2}bf`,
        "minimap.warningHighlight": `${peach}bf`,
        "minimap.errorHighlight": `${error}bf`,
        "minimapSlider.background": `${accent}33`,
        "minimapSlider.hoverBackground": `${accent}66`,
        "minimapSlider.activeBackground": `${accent}99`,
        "minimapGutter.addedBackground": `${green}bf`,
        "minimapGutter.deletedBackground": `${red}bf`,
        "minimapGutter.modifiedBackground": `${yellow}bf`,
        "notificationCenter.border": accent,
        "notificationCenterHeader.foreground": text,
        "notificationCenterHeader.background": mantle,
        "notificationToast.border": accent,
        "notifications.foreground": text,
        "notifications.background": mantle,
        "notifications.border": accent,
        "notificationLink.foreground": blue,
        "notificationsErrorIcon.foreground": error,
        "notificationsWarningIcon.foreground": peach,
        "notificationsInfoIcon.foreground": blue,
        "panel.background": base,
        "panel.border": surface2,
        "panelSection.border": surface2,
        "panelSection.dropBackground": `${accent}33`,
        "panelTitle.activeBorder": accent,
        "panelTitle.activeForeground": text,
        "panelTitle.inactiveForeground": subtext0,
        "peekView.border": accent,
        "peekViewEditor.background": mantle,
        "peekViewEditorGutter.background": mantle,
        "peekViewEditor.matchHighlightBackground": `${sky}4d`,
        "peekViewEditor.matchHighlightBorder": "#00000000",
        "peekViewResult.background": mantle,
        "peekViewResult.fileForeground": text,
        "peekViewResult.lineForeground": text,
        "peekViewResult.matchHighlightBackground": `${sky}4d`,
        "peekViewResult.selectionBackground": surface0,
        "peekViewResult.selectionForeground": text,
        "peekViewTitle.background": base,
        "peekViewTitleDescription.foreground": `${subtext1}b3`,
        "peekViewTitleLabel.foreground": text,
        "pickerGroup.border": accent,
        "pickerGroup.foreground": accent,
        "progressBar.background": accent,
        "scrollbar.shadow": crust,
        "scrollbarSlider.activeBackground": `${surface0}66`,
        "scrollbarSlider.background": `${surface2}80`,
        "scrollbarSlider.hoverBackground": overlay0,
        "settings.focusedRowBackground": `${surface2}33`,
        "settings.headerForeground": text,
        "settings.modifiedItemIndicator": accent,
        "settings.dropdownBackground": surface1,
        "settings.dropdownListBorder": "#00000000",
        "settings.textInputBackground": surface1,
        "settings.textInputBorder": "#00000000",
        "settings.numberInputBackground": surface1,
        "settings.numberInputBorder": "#00000000",
        "sideBar.background": mantle,
        "sideBar.dropBackground": `${accent}33`,
        "sideBar.foreground": text,
        "sideBar.border": "#00000000",
        "sideBarSectionHeader.background": mantle,
        "sideBarSectionHeader.foreground": text,
        "sideBarTitle.foreground": accent,
        "banner.background": surface1,
        "banner.foreground": text,
        "banner.iconForeground": text,
        "statusBar.background": crust,
        "statusBar.foreground": text,
        "statusBar.border": "#00000000",
        "statusBar.noFolderBackground": crust,
        "statusBar.noFolderForeground": text,
        "statusBar.noFolderBorder": "#00000000",
        "statusBar.debuggingBackground": peach,
        "statusBar.debuggingForeground": crust,
        "statusBar.debuggingBorder": "#00000000",
        "statusBarItem.remoteBackground": blue,
        "statusBarItem.remoteForeground": crust,
        "statusBarItem.activeBackground": `${surface2}66`,
        "statusBarItem.hoverBackground": `${surface2}33`,
        "statusBarItem.prominentForeground": accent,
        "statusBarItem.prominentBackground": "#00000000",
        "statusBarItem.prominentHoverBackground": `${surface2}33`,
        "statusBarItem.errorForeground": error,
        "statusBarItem.errorBackground": "#00000000",
        "statusBarItem.warningForeground": peach,
        "statusBarItem.warningBackground": "#00000000",
        "commandCenter.foreground": subtext1,
        "commandCenter.inactiveForeground": subtext1,
        "commandCenter.activeForeground": accent,
        "commandCenter.background": mantle,
        "commandCenter.activeBackground": `${surface2}33`,
        "commandCenter.border": "#00000000",
        "commandCenter.inactiveBorder": "#00000000",
        "commandCenter.activeBorder": accent,
        "tab.activeBackground": base,
        "tab.activeBorder": "#00000000",
        "tab.activeBorderTop": accent,
        "tab.activeForeground": accent,
        "tab.activeModifiedBorder": yellow,
        "tab.border": mantle,
        "tab.hoverBackground": shade(base, 0.05),
        "tab.hoverBorder": "#00000000",
        "tab.hoverForeground": accent,
        "tab.inactiveBackground": mantle,
        "tab.inactiveForeground": overlay0,
        "tab.inactiveModifiedBorder": `${yellow}4d`,
        "tab.lastPinnedBorder": accent,
        "tab.unfocusedActiveBackground": mantle,
        "tab.unfocusedActiveBorder": "#00000000",
        "tab.unfocusedActiveBorderTop": `${accent}4d`,
        "tab.unfocusedInactiveBackground": shade(mantle, -0.05),
        "terminal.foreground": text,
        "terminal.ansiBlack": surface1,
        "terminal.ansiRed": red,
        "terminal.ansiGreen": green,
        "terminal.ansiYellow": yellow,
        "terminal.ansiBlue": blue,
        "terminal.ansiMagenta": pink,
        "terminal.ansiCyan": teal,
        "terminal.ansiWhite": subtext0,
        "terminal.ansiBrightBlack": surface2,
        "terminal.ansiBrightRed": shade(red, 0.1),
        "terminal.ansiBrightGreen": shade(green, 0.1),
        "terminal.ansiBrightYellow": shade(yellow, 0.1),
        "terminal.ansiBrightBlue": shade(blue, 0.1),
        "terminal.ansiBrightMagenta": shade(pink, 0.1),
        "terminal.ansiBrightCyan": shade(teal, 0.1),
        "terminal.ansiBrightWhite": subtext1,
        "terminal.selectionBackground": surface2,
        "terminal.inactiveSelectionBackground": `${surface2}80`,
        "terminalCursor.background": base,
        "terminalCursor.foreground": rosewater,
        "terminal.border": surface2,
        "terminal.dropBackground": `${accent}33`,
        "terminal.tab.activeBorder": accent,
        "terminalCommandDecoration.defaultBackground": surface2,
        "terminalCommandDecoration.successBackground": success,
        "terminalCommandDecoration.errorBackground": error,
        "titleBar.activeBackground": crust,
        "titleBar.activeForeground": text,
        "titleBar.inactiveBackground": crust,
        "titleBar.inactiveForeground": `${text}80`,
        "titleBar.border": "#00000000",
        "welcomePage.tileBackground": mantle,
        "welcomePage.progress.background": crust,
        "welcomePage.progress.foreground": accent,
        "walkThrough.embeddedEditorBackground": `${base}4d`,
        "symbolIcon.textForeground": text,
        "symbolIcon.arrayForeground": peach,
        "symbolIcon.booleanForeground": mauve,
        "symbolIcon.classForeground": yellow,
        "symbolIcon.colorForeground": pink,
        "symbolIcon.constantForeground": peach,
        "symbolIcon.constructorForeground": lavender,
        "symbolIcon.enumeratorForeground": yellow,
        "symbolIcon.enumeratorMemberForeground": yellow,
        "symbolIcon.eventForeground": pink,
        "symbolIcon.fieldForeground": text,
        "symbolIcon.fileForeground": accent,
        "symbolIcon.folderForeground": accent,
        "symbolIcon.functionForeground": blue,
        "symbolIcon.interfaceForeground": yellow,
        "symbolIcon.keyForeground": teal,
        "symbolIcon.keywordForeground": mauve,
        "symbolIcon.methodForeground": blue,
        "symbolIcon.moduleForeground": text,
        "symbolIcon.namespaceForeground": yellow,
        "symbolIcon.nullForeground": maroon,
        "symbolIcon.numberForeground": peach,
        "symbolIcon.objectForeground": yellow,
        "symbolIcon.operatorForeground": teal,
        "symbolIcon.packageForeground": flamingo,
        "symbolIcon.propertyForeground": maroon,
        "symbolIcon.referenceForeground": yellow,
        "symbolIcon.snippetForeground": flamingo,
        "symbolIcon.stringForeground": green,
        "symbolIcon.structForeground": teal,
        "symbolIcon.typeParameterForeground": maroon,
        "symbolIcon.unitForeground": text,
        "symbolIcon.variableForeground": text,
        "charts.foreground": text,
        "charts.lines": subtext1,
        "charts.red": red,
        "charts.blue": blue,
        "charts.yellow": yellow,
        "charts.orange": peach,
        "charts.green": green,
        "charts.purple": mauve,
        "errorLens.errorBackground": `${error}26`,
        "errorLens.errorBackgroundLight": `${error}26`,
        "errorLens.errorForeground": error,
        "errorLens.errorForegroundLight": error,
        "errorLens.errorMessageBackground": `${error}26`,
        "errorLens.hintBackground": `${success}26`,
        "errorLens.hintBackgroundLight": `${success}26`,
        "errorLens.hintForeground": success,
        "errorLens.hintForegroundLight": success,
        "errorLens.hintMessageBackground": `${success}26`,
        "errorLens.infoBackground": `${blue}26`,
        "errorLens.infoBackgroundLight": `${blue}26`,
        "errorLens.infoForeground": blue,
        "errorLens.infoForegroundLight": blue,
        "errorLens.infoMessageBackground": `${blue}26`,
        "errorLens.statusBarErrorForeground": error,
        "errorLens.statusBarHintForeground": success,
        "errorLens.statusBarIconErrorForeground": error,
        "errorLens.statusBarIconWarningForeground": peach,
        "errorLens.statusBarInfoForeground": blue,
        "errorLens.statusBarWarningForeground": peach,
        "errorLens.warningBackground": `${peach}26`,
        "errorLens.warningBackgroundLight": `${peach}26`,
        "errorLens.warningForeground": peach,
        "errorLens.warningForegroundLight": peach,
        "errorLens.warningMessageBackground": `${peach}26`,
        "issues.closed": mauve,
        "issues.newIssueDecoration": rosewater,
        "issues.open": green,
        "pullRequests.closed": red,
        "pullRequests.draft": overlay2,
        "pullRequests.merged": mauve,
        "pullRequests.notification": text,
        "pullRequests.open": green,
        "gitlens.gutterBackgroundColor": `${surface0}4d`,
        "gitlens.gutterForegroundColor": text,
        "gitlens.gutterUncommittedForegroundColor": accent,
        "gitlens.trailingLineBackgroundColor": "#00000000",
        "gitlens.trailingLineForegroundColor": `${text}4d`,
        "gitlens.lineHighlightBackgroundColor": `${accent}26`,
        "gitlens.lineHighlightOverviewRulerColor": `${accent}cc`,
        "gitlens.openAutolinkedIssueIconColor": green,
        "gitlens.closedAutolinkedIssueIconColor": mauve,
        "gitlens.closedPullRequestIconColor": red,
        "gitlens.openPullRequestIconColor": green,
        "gitlens.mergedPullRequestIconColor": mauve,
        "gitlens.unpublishedChangesIconColor": green,
        "gitlens.unpublishedCommitIconColor": green,
        "gitlens.unpulledChangesIconColor": peach,
        "gitlens.decorations.branchAheadForegroundColor": green,
        "gitlens.decorations.branchBehindForegroundColor": peach,
        "gitlens.decorations.branchDivergedForegroundColor": yellow,
        "gitlens.decorations.branchUnpublishedForegroundColor": green,
        "gitlens.decorations.branchMissingUpstreamForegroundColor": peach,
        "gitlens.decorations.statusMergingOrRebasingConflictForegroundColor": maroon,
        "gitlens.decorations.statusMergingOrRebasingForegroundColor": yellow,
        "gitlens.decorations.workspaceRepoMissingForegroundColor": subtext0,
        "gitlens.decorations.workspaceCurrentForegroundColor": accent,
        "gitlens.decorations.workspaceRepoOpenForegroundColor": accent,
        "gitlens.decorations.worktreeHasUncommittedChangesForegroundColor": peach,
        "gitlens.decorations.worktreeMissingForegroundColor": maroon,
        "gitlens.graphLane1Color": mauve,
        "gitlens.graphLane2Color": yellow,
        "gitlens.graphLane3Color": blue,
        "gitlens.graphLane4Color": flamingo,
        "gitlens.graphLane5Color": green,
        "gitlens.graphLane6Color": lavender,
        "gitlens.graphLane7Color": rosewater,
        "gitlens.graphLane8Color": red,
        "gitlens.graphLane9Color": teal,
        "gitlens.graphLane10Color": pink,
        "gitlens.graphChangesColumnAddedColor": success,
        "gitlens.graphChangesColumnDeletedColor": error,
        "gitlens.graphMinimapMarkerHeadColor": green,
        "gitlens.graphScrollMarkerHeadColor": green,
        "gitlens.graphMinimapMarkerUpstreamColor": shade(green, -0.05),
        "gitlens.graphScrollMarkerUpstreamColor": shade(green, -0.05),
        "gitlens.graphMinimapMarkerHighlightsColor": yellow,
        "gitlens.graphScrollMarkerHighlightsColor": yellow,
        "gitlens.graphMinimapMarkerLocalBranchesColor": blue,
        "gitlens.graphScrollMarkerLocalBranchesColor": blue,
        "gitlens.graphMinimapMarkerRemoteBranchesColor": shade(blue, -0.05),
        "gitlens.graphScrollMarkerRemoteBranchesColor": shade(blue, -0.05),
        "gitlens.graphMinimapMarkerStashesColor": mauve,
        "gitlens.graphScrollMarkerStashesColor": mauve,
        "gitlens.graphMinimapMarkerTagsColor": flamingo,
        "gitlens.graphScrollMarkerTagsColor": flamingo,
        "editorBracketHighlight.foreground1": red,
        "editorBracketHighlight.foreground2": peach,
        "editorBracketHighlight.foreground3": yellow,
        "editorBracketHighlight.foreground4": green,
        "editorBracketHighlight.foreground5": sapphire,
        "editorBracketHighlight.foreground6": mauve,
        "editorBracketHighlight.unexpectedBracket.foreground": maroon,
        "button.secondaryBorder": mauve,
        "table.headerBackground": surface0,
        "table.headerForeground": text,
        "list.focusAndSelectionBackground": surface1,
    },
    semanticHighlighting: true,
    semanticTokenColors: {
        enumMember: {
            foreground: teal,
        },
        selfKeyword: {
            foreground: red,
        },
        boolean: {
            foreground: peach,
        },
        number: {
            foreground: peach,
        },
        "variable.defaultLibrary": {
            foreground: maroon,
        },
        "class:python": {
            foreground: yellow,
        },
        "class.builtin:python": {
            foreground: mauve,
        },
        "variable.typeHint:python": {
            foreground: yellow,
        },
        "function.decorator:python": {
            foreground: peach,
        },
        "variable.readonly:javascript": {
            foreground: text,
        },
        "variable.readonly:typescript": {
            foreground: text,
        },
        "property.readonly:javascript": {
            foreground: text,
        },
        "property.readonly:typescript": {
            foreground: text,
        },
        "variable.readonly:javascriptreact": {
            foreground: text,
        },
        "variable.readonly:typescriptreact": {
            foreground: text,
        },
        "property.readonly:javascriptreact": {
            foreground: text,
        },
        "property.readonly:typescriptreact": {
            foreground: text,
        },
        "variable.readonly:scala": {
            foreground: text,
        },
        "type.defaultLibrary:go": {
            foreground: mauve,
        },
        "variable.readonly.defaultLibrary:go": {
            foreground: mauve,
        },
        tomlArrayKey: {
            foreground: blue,
            fontStyle: "",
        },
        tomlTableKey: {
            foreground: blue,
            fontStyle: "",
        },
        "builtinAttribute.attribute.library:rust": {
            foreground: blue,
        },
        "generic.attribute:rust": {
            foreground: text,
        },
        "constant.builtin.readonly:nix": {
            foreground: mauve,
        },
        heading: {
            foreground: red,
        },
        "text.emph": {
            foreground: red,
            fontStyle: "italic",
        },
        "text.strong": {
            foreground: red,
            fontStyle: "bold",
        },
        "text.math": {
            foreground: flamingo,
        },
        pol: {
            foreground: flamingo,
        },
    },
    tokenColors: [
        {
            name: "Basic text & variable names (incl. leading punctuation)",
            scope: ["text", "source", "variable.other.readwrite", "punctuation.definition.variable"],
            settings: {
                foreground: text,
            },
        },
        {
            name: "Parentheses, Brackets, Braces",
            scope: "punctuation",
            settings: {
                foreground: overlay2,
                fontStyle: "",
            },
        },
        {
            name: "Comments",
            scope: ["comment", "punctuation.definition.comment"],
            settings: {
                foreground: overlay2,
                fontStyle: "italic",
            },
        },
        {
            scope: ["string", "punctuation.definition.string"],
            settings: {
                foreground: green,
            },
        },
        {
            scope: "constant.character.escape",
            settings: {
                foreground: pink,
            },
        },
        {
            name: "Booleans, constants, numbers",
            scope: [
                "constant.numeric",
                "variable.other.constant",
                "entity.name.constant",
                "constant.language.boolean",
                "constant.language.false",
                "constant.language.true",
                "keyword.other.unit.user-defined",
                "keyword.other.unit.suffix.floating-point",
            ],
            settings: {
                foreground: peach,
            },
        },
        {
            scope: [
                "keyword",
                "keyword.operator.word",
                "keyword.operator.new",
                "variable.language.super",
                "support.type.primitive",
                "storage.type",
                "storage.modifier",
                "punctuation.definition.keyword",
            ],
            settings: {
                foreground: mauve,
                fontStyle: "",
            },
        },
        {
            scope: "entity.name.tag.documentation",
            settings: {
                foreground: mauve,
            },
        },
        {
            name: "Punctuation",
            scope: [
                "keyword.operator",
                "punctuation.accessor",
                "punctuation.definition.generic",
                "meta.function.closure punctuation.section.parameters",
                "punctuation.definition.tag",
                "punctuation.separator.key-value",
            ],
            settings: {
                foreground: teal,
            },
        },
        {
            scope: [
                "entity.name.function",
                "meta.function-call.method",
                "support.function",
                "support.function.misc",
                "variable.function",
            ],
            settings: {
                foreground: blue,
                fontStyle: "italic",
            },
        },
        {
            name: "Classes",
            scope: [
                "entity.name.class",
                "entity.other.inherited-class",
                "support.class",
                "meta.function-call.constructor",
                "entity.name.struct",
            ],
            settings: {
                foreground: yellow,
                fontStyle: "italic",
            },
        },
        {
            name: "Enum",
            scope: "entity.name.enum",
            settings: {
                foreground: yellow,
                fontStyle: "italic",
            },
        },
        {
            name: "Enum member",
            scope: ["meta.enum variable.other.readwrite", "variable.other.enummember"],
            settings: {
                foreground: teal,
            },
        },
        {
            name: "Object properties",
            scope: "meta.property.object",
            settings: {
                foreground: teal,
            },
        },
        {
            name: "Types",
            scope: ["meta.type", "meta.type-alias", "support.type", "entity.name.type"],
            settings: {
                foreground: yellow,
                fontStyle: "italic",
            },
        },
        {
            name: "Decorators",
            scope: [
                "meta.annotation variable.function",
                "meta.annotation variable.annotation.function",
                "meta.annotation punctuation.definition.annotation",
                "meta.decorator",
                "punctuation.decorator",
            ],
            settings: {
                foreground: peach,
            },
        },
        {
            scope: ["variable.parameter", "meta.function.parameters"],
            settings: {
                foreground: maroon,
                fontStyle: "italic",
            },
        },
        {
            name: "Built-ins",
            scope: ["constant.language", "support.function.builtin"],
            settings: {
                foreground: red,
            },
        },
        {
            scope: "entity.other.attribute-name.documentation",
            settings: {
                foreground: red,
            },
        },
        {
            name: "Preprocessor directives",
            scope: ["keyword.control.directive", "punctuation.definition.directive"],
            settings: {
                foreground: yellow,
            },
        },
        {
            name: "Type parameters",
            scope: "punctuation.definition.typeparameters",
            settings: {
                foreground: sky,
            },
        },
        {
            name: "Namespaces",
            scope: "entity.name.namespace",
            settings: {
                foreground: yellow,
            },
        },
        {
            name: "Property names (left hand assignments in json/yaml/css)",
            scope: "support.type.property-name.css",
            settings: {
                foreground: blue,
                fontStyle: "",
            },
        },
        {
            name: "This/Self keyword",
            scope: ["variable.language.this", "variable.language.this punctuation.definition.variable"],
            settings: {
                foreground: red,
            },
        },
        {
            name: "Object properties",
            scope: "variable.object.property",
            settings: {
                foreground: text,
            },
        },
        {
            name: "String template interpolation",
            scope: ["string.template variable", "string variable"],
            settings: {
                foreground: text,
            },
        },
        {
            name: "`new` as bold",
            scope: "keyword.operator.new",
            settings: {
                fontStyle: "bold",
            },
        },
        {
            name: "C++ extern keyword",
            scope: "storage.modifier.specifier.extern.cpp",
            settings: {
                foreground: mauve,
            },
        },
        {
            name: "C++ scope resolution",
            scope: [
                "entity.name.scope-resolution.template.call.cpp",
                "entity.name.scope-resolution.parameter.cpp",
                "entity.name.scope-resolution.cpp",
                "entity.name.scope-resolution.function.definition.cpp",
            ],
            settings: {
                foreground: yellow,
            },
        },
        {
            name: "C++ doc keywords",
            scope: "storage.type.class.doxygen",
            settings: {
                fontStyle: "",
            },
        },
        {
            name: "C++ operators",
            scope: ["storage.modifier.reference.cpp"],
            settings: {
                foreground: teal,
            },
        },
        {
            name: "C# Interpolated Strings",
            scope: "meta.interpolation.cs",
            settings: {
                foreground: text,
            },
        },
        {
            name: "C# xml-style docs",
            scope: "comment.block.documentation.cs",
            settings: {
                foreground: text,
            },
        },
        {
            name: "Classes, reflecting the className color in JSX",
            scope: [
                "source.css entity.other.attribute-name.class.css",
                "entity.other.attribute-name.parent-selector.css punctuation.definition.entity.css",
            ],
            settings: {
                foreground: yellow,
            },
        },
        {
            name: "Operators",
            scope: "punctuation.separator.operator.css",
            settings: {
                foreground: teal,
            },
        },
        {
            name: "Pseudo classes",
            scope: "source.css entity.other.attribute-name.pseudo-class",
            settings: {
                foreground: teal,
            },
        },
        {
            scope: "source.css constant.other.unicode-range",
            settings: {
                foreground: peach,
            },
        },
        {
            scope: "source.css variable.parameter.url",
            settings: {
                foreground: green,
                fontStyle: "",
            },
        },
        {
            name: "CSS vendored property names",
            scope: ["support.type.vendored.property-name"],
            settings: {
                foreground: sky,
            },
        },
        {
            name: "Less/SCSS right-hand variables (@/$-prefixed)",
            scope: [
                "source.css meta.property-value variable",
                "source.css meta.property-value variable.other.less",
                "source.css meta.property-value variable.other.less punctuation.definition.variable.less",
                "meta.definition.variable.scss",
            ],
            settings: {
                foreground: maroon,
            },
        },
        {
            name: "CSS variables (--prefixed)",
            scope: [
                "source.css meta.property-list variable",
                "meta.property-list variable.other.less",
                "meta.property-list variable.other.less punctuation.definition.variable.less",
            ],
            settings: {
                foreground: blue,
            },
        },
        {
            name: "CSS Percentage values, styled the same as numbers",
            scope: "keyword.other.unit.percentage.css",
            settings: {
                foreground: peach,
            },
        },
        {
            name: "CSS Attribute selectors, styled the same as strings",
            scope: "source.css meta.attribute-selector",
            settings: {
                foreground: green,
            },
        },
        {
            name: "JSON/YAML keys, other left-hand assignments",
            scope: [
                "keyword.other.definition.ini",
                "punctuation.support.type.property-name.json",
                "support.type.property-name.json",
                "punctuation.support.type.property-name.toml",
                "support.type.property-name.toml",
                "entity.name.tag.yaml",
                "punctuation.support.type.property-name.yaml",
                "support.type.property-name.yaml",
            ],
            settings: {
                foreground: blue,
                fontStyle: "",
            },
        },
        {
            name: "JSON/YAML constants",
            scope: ["constant.language.json", "constant.language.yaml"],
            settings: {
                foreground: peach,
            },
        },
        {
            name: "YAML anchors",
            scope: ["entity.name.type.anchor.yaml", "variable.other.alias.yaml"],
            settings: {
                foreground: yellow,
                fontStyle: "",
            },
        },
        {
            name: "TOML tables / ini groups",
            scope: ["support.type.property-name.table", "entity.name.section.group-title.ini"],
            settings: {
                foreground: yellow,
            },
        },
        {
            name: "TOML dates",
            scope: "constant.other.time.datetime.offset.toml",
            settings: {
                foreground: pink,
            },
        },
        {
            name: "YAML anchor puctuation",
            scope: ["punctuation.definition.anchor.yaml", "punctuation.definition.alias.yaml"],
            settings: {
                foreground: pink,
            },
        },
        {
            name: "YAML triple dashes",
            scope: "entity.other.document.begin.yaml",
            settings: {
                foreground: pink,
            },
        },
        {
            name: "Markup Diff",
            scope: "markup.changed.diff",
            settings: {
                foreground: peach,
            },
        },
        {
            name: "Diff",
            scope: [
                "meta.diff.header.from-file",
                "meta.diff.header.to-file",
                "punctuation.definition.from-file.diff",
                "punctuation.definition.to-file.diff",
            ],
            settings: {
                foreground: blue,
            },
        },
        {
            name: "Diff Inserted",
            scope: "markup.inserted.diff",
            settings: {
                foreground: green,
            },
        },
        {
            name: "Diff Deleted",
            scope: "markup.deleted.diff",
            settings: {
                foreground: red,
            },
        },
        {
            name: "dotenv left-hand side assignments",
            scope: ["variable.other.env"],
            settings: {
                foreground: blue,
            },
        },
        {
            name: "dotenv reference to existing env variable",
            scope: ["string.quoted variable.other.env"],
            settings: {
                foreground: text,
            },
        },
        {
            name: "GDScript functions",
            scope: "support.function.builtin.gdscript",
            settings: {
                foreground: blue,
            },
        },
        {
            name: "GDScript constants",
            scope: "constant.language.gdscript",
            settings: {
                foreground: peach,
            },
        },
        {
            name: "Comment keywords",
            scope: "comment meta.annotation.go",
            settings: {
                foreground: maroon,
            },
        },
        {
            name: "go:embed, go:build, etc.",
            scope: "comment meta.annotation.parameters.go",
            settings: {
                foreground: peach,
            },
        },
        {
            name: "Go constants (nil, true, false)",
            scope: "constant.language.go",
            settings: {
                foreground: peach,
            },
        },
        {
            name: "GraphQL variables",
            scope: "variable.graphql",
            settings: {
                foreground: text,
            },
        },
        {
            name: "GraphQL aliases",
            scope: "string.unquoted.alias.graphql",
            settings: {
                foreground: flamingo,
            },
        },
        {
            name: "GraphQL enum members",
            scope: "constant.character.enum.graphql",
            settings: {
                foreground: teal,
            },
        },
        {
            name: "GraphQL field in types",
            scope: "meta.objectvalues.graphql constant.object.key.graphql string.unquoted.graphql",
            settings: {
                foreground: flamingo,
            },
        },
        {
            name: "HTML/XML DOCTYPE as keyword",
            scope: [
                "keyword.other.doctype",
                "meta.tag.sgml.doctype punctuation.definition.tag",
                "meta.tag.metadata.doctype entity.name.tag",
                "meta.tag.metadata.doctype punctuation.definition.tag",
            ],
            settings: {
                foreground: mauve,
            },
        },
        {
            name: "HTML/XML-like <tags/>",
            scope: ["entity.name.tag"],
            settings: {
                foreground: blue,
                fontStyle: "",
            },
        },
        {
            name: "Special characters like &amp;",
            scope: [
                "text.html constant.character.entity",
                "text.html constant.character.entity punctuation",
                "constant.character.entity.xml",
                "constant.character.entity.xml punctuation",
                "constant.character.entity.js.jsx",
                "constant.charactger.entity.js.jsx punctuation",
                "constant.character.entity.tsx",
                "constant.character.entity.tsx punctuation",
            ],
            settings: {
                foreground: red,
            },
        },
        {
            name: "HTML/XML tag attribute values",
            scope: ["entity.other.attribute-name"],
            settings: {
                foreground: yellow,
            },
        },
        {
            name: "Components",
            scope: [
                "support.class.component",
                "support.class.component.jsx",
                "support.class.component.tsx",
                "support.class.component.vue",
            ],
            settings: {
                foreground: pink,
                fontStyle: "",
            },
        },
        {
            name: "Annotations",
            scope: ["punctuation.definition.annotation", "storage.type.annotation"],
            settings: {
                foreground: peach,
            },
        },
        {
            name: "Java enums",
            scope: "constant.other.enum.java",
            settings: {
                foreground: teal,
            },
        },
        {
            name: "Java imports",
            scope: "storage.modifier.import.java",
            settings: {
                foreground: text,
            },
        },
        {
            name: "Javadoc",
            scope: "comment.block.javadoc.java keyword.other.documentation.javadoc.java",
            settings: {
                fontStyle: "",
            },
        },
        {
            name: "Exported Variable",
            scope: "meta.export variable.other.readwrite.js",
            settings: {
                foreground: maroon,
            },
        },
        {
            name: "JS/TS constants & properties",
            scope: [
                "variable.other.constant.js",
                "variable.other.constant.ts",
                "variable.other.property.js",
                "variable.other.property.ts",
            ],
            settings: {
                foreground: text,
            },
        },
        {
            name: "JSDoc; these are mainly params, so styled as such",
            scope: ["variable.other.jsdoc", "comment.block.documentation variable.other"],
            settings: {
                foreground: maroon,
                fontStyle: "",
            },
        },
        {
            name: "JSDoc keywords",
            scope: "storage.type.class.jsdoc",
            settings: {
                fontStyle: "",
            },
        },
        {
            scope: "support.type.object.console.js",
            settings: {
                foreground: text,
            },
        },
        {
            name: "Node constants as keywords (module, etc.)",
            scope: ["support.constant.node", "support.type.object.module.js"],
            settings: {
                foreground: mauve,
            },
        },
        {
            name: "implements as keyword",
            scope: "storage.modifier.implements",
            settings: {
                foreground: mauve,
            },
        },
        {
            name: "Builtin types",
            scope: [
                "constant.language.null.js",
                "constant.language.null.ts",
                "constant.language.undefined.js",
                "constant.language.undefined.ts",
                "support.type.builtin.ts",
            ],
            settings: {
                foreground: mauve,
            },
        },
        {
            scope: "variable.parameter.generic",
            settings: {
                foreground: yellow,
            },
        },
        {
            name: "Arrow functions",
            scope: ["keyword.declaration.function.arrow.js", "storage.type.function.arrow.ts"],
            settings: {
                foreground: teal,
            },
        },
        {
            name: "Decorator punctuations (decorators inherit from blue functions, instead of styleguide peach)",
            scope: "punctuation.decorator.ts",
            settings: {
                foreground: blue,
                fontStyle: "italic",
            },
        },
        {
            name: "Extra JS/TS keywords",
            scope: [
                "keyword.operator.expression.in.js",
                "keyword.operator.expression.in.ts",
                "keyword.operator.expression.infer.ts",
                "keyword.operator.expression.instanceof.js",
                "keyword.operator.expression.instanceof.ts",
                "keyword.operator.expression.is",
                "keyword.operator.expression.keyof.ts",
                "keyword.operator.expression.of.js",
                "keyword.operator.expression.of.ts",
                "keyword.operator.expression.typeof.ts",
            ],
            settings: {
                foreground: mauve,
            },
        },
        {
            name: "Julia macros",
            scope: "support.function.macro.julia",
            settings: {
                foreground: teal,
                fontStyle: "italic",
            },
        },
        {
            name: "Julia language constants (true, false)",
            scope: "constant.language.julia",
            settings: {
                foreground: peach,
            },
        },
        {
            name: "Julia other constants (these seem to be arguments inside arrays)",
            scope: "constant.other.symbol.julia",
            settings: {
                foreground: maroon,
            },
        },
        {
            name: "LaTeX preamble",
            scope: "text.tex keyword.control.preamble",
            settings: {
                foreground: teal,
            },
        },
        {
            name: "LaTeX be functions",
            scope: "text.tex support.function.be",
            settings: {
                foreground: sky,
            },
        },
        {
            name: "LaTeX math",
            scope: "constant.other.general.math.tex",
            settings: {
                foreground: flamingo,
            },
        },
        {
            name: "Liquid Builtin Objects & User Defined Variables",
            scope: "variable.language.liquid",
            settings: {
                foreground: pink,
            },
        },
        {
            name: "Lua docstring keywords",
            scope: "comment.line.double-dash.documentation.lua storage.type.annotation.lua",
            settings: {
                foreground: mauve,
                fontStyle: "",
            },
        },
        {
            name: "Lua docstring variables",
            scope: [
                "comment.line.double-dash.documentation.lua entity.name.variable.lua",
                "comment.line.double-dash.documentation.lua variable.lua",
            ],
            settings: {
                foreground: text,
            },
        },
        {
            scope: [
                "heading.1.markdown punctuation.definition.heading.markdown",
                "heading.1.markdown",
                "heading.1.quarto punctuation.definition.heading.quarto",
                "heading.1.quarto",
                "markup.heading.atx.1.mdx",
                "markup.heading.atx.1.mdx punctuation.definition.heading.mdx",
                "markup.heading.setext.1.markdown",
                "markup.heading.heading-0.asciidoc",
            ],
            settings: {
                foreground: red,
            },
        },
        {
            scope: [
                "heading.2.markdown punctuation.definition.heading.markdown",
                "heading.2.markdown",
                "heading.2.quarto punctuation.definition.heading.quarto",
                "heading.2.quarto",
                "markup.heading.atx.2.mdx",
                "markup.heading.atx.2.mdx punctuation.definition.heading.mdx",
                "markup.heading.setext.2.markdown",
                "markup.heading.heading-1.asciidoc",
            ],
            settings: {
                foreground: peach,
            },
        },
        {
            scope: [
                "heading.3.markdown punctuation.definition.heading.markdown",
                "heading.3.markdown",
                "heading.3.quarto punctuation.definition.heading.quarto",
                "heading.3.quarto",
                "markup.heading.atx.3.mdx",
                "markup.heading.atx.3.mdx punctuation.definition.heading.mdx",
                "markup.heading.heading-2.asciidoc",
            ],
            settings: {
                foreground: yellow,
            },
        },
        {
            scope: [
                "heading.4.markdown punctuation.definition.heading.markdown",
                "heading.4.markdown",
                "heading.4.quarto punctuation.definition.heading.quarto",
                "heading.4.quarto",
                "markup.heading.atx.4.mdx",
                "markup.heading.atx.4.mdx punctuation.definition.heading.mdx",
                "markup.heading.heading-3.asciidoc",
            ],
            settings: {
                foreground: green,
            },
        },
        {
            scope: [
                "heading.5.markdown punctuation.definition.heading.markdown",
                "heading.5.markdown",
                "heading.5.quarto punctuation.definition.heading.quarto",
                "heading.5.quarto",
                "markup.heading.atx.5.mdx",
                "markup.heading.atx.5.mdx punctuation.definition.heading.mdx",
                "markup.heading.heading-4.asciidoc",
            ],
            settings: {
                foreground: sapphire,
            },
        },
        {
            scope: [
                "heading.6.markdown punctuation.definition.heading.markdown",
                "heading.6.markdown",
                "heading.6.quarto punctuation.definition.heading.quarto",
                "heading.6.quarto",
                "markup.heading.atx.6.mdx",
                "markup.heading.atx.6.mdx punctuation.definition.heading.mdx",
                "markup.heading.heading-5.asciidoc",
            ],
            settings: {
                foreground: lavender,
            },
        },
        {
            scope: "markup.bold",
            settings: {
                foreground: red,
                fontStyle: "bold",
            },
        },
        {
            scope: "markup.italic",
            settings: {
                foreground: red,
                fontStyle: "italic",
            },
        },
        {
            scope: "markup.strikethrough",
            settings: {
                foreground: subtext0,
                fontStyle: "strikethrough",
            },
        },
        {
            name: "Markdown auto links",
            scope: ["punctuation.definition.link", "markup.underline.link"],
            settings: {
                foreground: blue,
            },
        },
        {
            name: "Markdown links",
            scope: [
                "text.html.markdown punctuation.definition.link.title",
                "text.html.quarto punctuation.definition.link.title",
                "string.other.link.title.markdown",
                "string.other.link.title.quarto",
                "markup.link",
                "punctuation.definition.constant.markdown",
                "punctuation.definition.constant.quarto",
                "constant.other.reference.link.markdown",
                "constant.other.reference.link.quarto",
                "markup.substitution.attribute-reference",
            ],
            settings: {
                foreground: lavender,
            },
        },
        {
            name: "Markdown code spans",
            scope: [
                "punctuation.definition.raw.markdown",
                "punctuation.definition.raw.quarto",
                "markup.inline.raw.string.markdown",
                "markup.inline.raw.string.quarto",
                "markup.raw.block.markdown",
                "markup.raw.block.quarto",
            ],
            settings: {
                foreground: green,
            },
        },
        {
            name: "Markdown triple backtick language identifier",
            scope: "fenced_code.block.language",
            settings: {
                foreground: sky,
            },
        },
        {
            name: "Markdown triple backticks",
            scope: ["markup.fenced_code.block punctuation.definition", "markup.raw support.asciidoc"],
            settings: {
                foreground: overlay2,
            },
        },
        {
            name: "Markdown quotes",
            scope: ["markup.quote", "punctuation.definition.quote.begin"],
            settings: {
                foreground: pink,
            },
        },
        {
            name: "Markdown separators",
            scope: "meta.separator.markdown",
            settings: {
                foreground: teal,
            },
        },
        {
            name: "Markdown list bullets",
            scope: [
                "punctuation.definition.list.begin.markdown",
                "punctuation.definition.list.begin.quarto",
                "markup.list.bullet",
            ],
            settings: {
                foreground: teal,
            },
        },
        {
            name: "Quarto headings",
            scope: "markup.heading.quarto",
            settings: {
                fontStyle: "bold",
            },
        },
        {
            name: "Nix attribute names",
            scope: ["entity.other.attribute-name.multipart.nix", "entity.other.attribute-name.single.nix"],
            settings: {
                foreground: blue,
            },
        },
        {
            name: "Nix parameter names",
            scope: "variable.parameter.name.nix",
            settings: {
                foreground: text,
                fontStyle: "",
            },
        },
        {
            name: "Nix interpolated parameter names",
            scope: "meta.embedded variable.parameter.name.nix",
            settings: {
                foreground: lavender,
                fontStyle: "",
            },
        },
        {
            name: "Nix paths",
            scope: "string.unquoted.path.nix",
            settings: {
                foreground: pink,
                fontStyle: "",
            },
        },
        {
            name: "PHP Attributes",
            scope: ["support.attribute.builtin", "meta.attribute.php"],
            settings: {
                foreground: yellow,
            },
        },
        {
            name: "PHP Parameters (needed for the leading dollar sign)",
            scope: "meta.function.parameters.php punctuation.definition.variable.php",
            settings: {
                foreground: maroon,
            },
        },
        {
            name: "PHP Constants (null, __FILE__, etc.)",
            scope: "constant.language.php",
            settings: {
                foreground: mauve,
            },
        },
        {
            name: "PHP functions",
            scope: "text.html.php support.function",
            settings: {
                foreground: sky,
            },
        },
        {
            name: "PHPdoc keywords",
            scope: "keyword.other.phpdoc.php",
            settings: {
                fontStyle: "",
            },
        },
        {
            name: "Python argument functions reset to text, otherwise they inherit blue from function-call",
            scope: ["support.variable.magic.python", "meta.function-call.arguments.python"],
            settings: {
                foreground: text,
            },
        },
        {
            name: "Python double underscore functions",
            scope: ["support.function.magic.python"],
            settings: {
                foreground: sky,
                fontStyle: "italic",
            },
        },
        {
            name: "Python `self` keyword",
            scope: [
                "variable.parameter.function.language.special.self.python",
                "variable.language.special.self.python",
            ],
            settings: {
                foreground: red,
                fontStyle: "italic",
            },
        },
        {
            name: "python keyword flow/logical (for ... in)",
            scope: ["keyword.control.flow.python", "keyword.operator.logical.python"],
            settings: {
                foreground: mauve,
            },
        },
        {
            name: "python storage type",
            scope: "storage.type.function.python",
            settings: {
                foreground: mauve,
            },
        },
        {
            name: "python function support",
            scope: ["support.token.decorator.python", "meta.function.decorator.identifier.python"],
            settings: {
                foreground: sky,
            },
        },
        {
            name: "python function calls",
            scope: ["meta.function-call.python"],
            settings: {
                foreground: blue,
            },
        },
        {
            name: "python function decorators",
            scope: ["entity.name.function.decorator.python", "punctuation.definition.decorator.python"],
            settings: {
                foreground: peach,
                fontStyle: "italic",
            },
        },
        {
            name: "python placeholder reset to normal string",
            scope: "constant.character.format.placeholder.other.python",
            settings: {
                foreground: pink,
            },
        },
        {
            name: "Python exception & builtins such as exit()",
            scope: ["support.type.exception.python", "support.function.builtin.python"],
            settings: {
                foreground: peach,
            },
        },
        {
            name: "entity.name.type",
            scope: ["support.type.python"],
            settings: {
                foreground: peach,
            },
        },
        {
            name: "python constants (True/False)",
            scope: "constant.language.python",
            settings: {
                foreground: mauve,
            },
        },
        {
            name: "Arguments accessed later in the function body",
            scope: ["meta.indexed-name.python", "meta.item-access.python"],
            settings: {
                foreground: maroon,
                fontStyle: "italic",
            },
        },
        {
            name: "Python f-strings/binary/unicode storage types",
            scope: "storage.type.string.python",
            settings: {
                foreground: green,
                fontStyle: "italic",
            },
        },
        {
            name: "Python type hints",
            scope: "meta.function.parameters.python",
            settings: {
                fontStyle: "",
            },
        },
        {
            name: "Regex string begin/end in JS/TS",
            scope: [
                "string.regexp punctuation.definition.string.begin",
                "string.regexp punctuation.definition.string.end",
            ],
            settings: {
                foreground: pink,
            },
        },
        {
            name: "Regex anchors (^, $)",
            scope: "keyword.control.anchor.regexp",
            settings: {
                foreground: mauve,
            },
        },
        {
            name: "Regex regular string match",
            scope: "string.regexp.ts",
            settings: {
                foreground: text,
            },
        },
        {
            name: "Regex group parenthesis & backreference (\\1, \\2, \\3, ...)",
            scope: ["punctuation.definition.group.regexp", "keyword.other.back-reference.regexp"],
            settings: {
                foreground: green,
            },
        },
        {
            name: "Regex character class []",
            scope: "punctuation.definition.character-class.regexp",
            settings: {
                foreground: yellow,
            },
        },
        {
            name: "Regex character classes (\\d, \\w, \\s)",
            scope: "constant.other.character-class.regexp",
            settings: {
                foreground: pink,
            },
        },
        {
            name: "Regex range",
            scope: "constant.other.character-class.range.regexp",
            settings: {
                foreground: rosewater,
            },
        },
        {
            name: "Regex quantifier",
            scope: "keyword.operator.quantifier.regexp",
            settings: {
                foreground: teal,
            },
        },
        {
            name: "Regex constant/numeric",
            scope: "constant.character.numeric.regexp",
            settings: {
                foreground: peach,
            },
        },
        {
            name: "Regex lookaheads, negative lookaheads, lookbehinds, negative lookbehinds",
            scope: [
                "punctuation.definition.group.no-capture.regexp",
                "meta.assertion.look-ahead.regexp",
                "meta.assertion.negative-look-ahead.regexp",
            ],
            settings: {
                foreground: blue,
            },
        },
        {
            name: "Rust attribute",
            scope: [
                "meta.annotation.rust",
                "meta.annotation.rust punctuation",
                "meta.attribute.rust",
                "punctuation.definition.attribute.rust",
            ],
            settings: {
                foreground: yellow,
                fontStyle: "italic",
            },
        },
        {
            name: "Rust attribute strings",
            scope: [
                "meta.attribute.rust string.quoted.double.rust",
                "meta.attribute.rust string.quoted.single.char.rust",
            ],
            settings: {
                fontStyle: "",
            },
        },
        {
            name: "Rust keyword",
            scope: [
                "entity.name.function.macro.rules.rust",
                "storage.type.module.rust",
                "storage.modifier.rust",
                "storage.type.struct.rust",
                "storage.type.enum.rust",
                "storage.type.trait.rust",
                "storage.type.union.rust",
                "storage.type.impl.rust",
                "storage.type.rust",
                "storage.type.function.rust",
                "storage.type.type.rust",
            ],
            settings: {
                foreground: mauve,
                fontStyle: "",
            },
        },
        {
            name: "Rust u/i32, u/i64, etc.",
            scope: "entity.name.type.numeric.rust",
            settings: {
                foreground: mauve,
                fontStyle: "",
            },
        },
        {
            name: "Rust generic",
            scope: "meta.generic.rust",
            settings: {
                foreground: peach,
            },
        },
        {
            name: "Rust impl",
            scope: "entity.name.impl.rust",
            settings: {
                foreground: yellow,
                fontStyle: "italic",
            },
        },
        {
            name: "Rust module",
            scope: "entity.name.module.rust",
            settings: {
                foreground: peach,
            },
        },
        {
            name: "Rust trait",
            scope: "entity.name.trait.rust",
            settings: {
                foreground: yellow,
                fontStyle: "italic",
            },
        },
        {
            name: "Rust struct",
            scope: "storage.type.source.rust",
            settings: {
                foreground: yellow,
            },
        },
        {
            name: "Rust union",
            scope: "entity.name.union.rust",
            settings: {
                foreground: yellow,
            },
        },
        {
            name: "Rust enum member",
            scope: "meta.enum.rust storage.type.source.rust",
            settings: {
                foreground: teal,
            },
        },
        {
            name: "Rust macro",
            scope: ["support.macro.rust", "meta.macro.rust support.function.rust", "entity.name.function.macro.rust"],
            settings: {
                foreground: blue,
                fontStyle: "italic",
            },
        },
        {
            name: "Rust lifetime",
            scope: ["storage.modifier.lifetime.rust", "entity.name.type.lifetime"],
            settings: {
                foreground: blue,
                fontStyle: "italic",
            },
        },
        {
            name: "Rust string formatting",
            scope: "string.quoted.double.rust constant.other.placeholder.rust",
            settings: {
                foreground: pink,
            },
        },
        {
            name: "Rust return type generic",
            scope: "meta.function.return-type.rust meta.generic.rust storage.type.rust",
            settings: {
                foreground: text,
            },
        },
        {
            name: "Rust functions",
            scope: "meta.function.call.rust",
            settings: {
                foreground: blue,
            },
        },
        {
            name: "Rust angle brackets",
            scope: "punctuation.brackets.angle.rust",
            settings: {
                foreground: sky,
            },
        },
        {
            name: "Rust constants",
            scope: "constant.other.caps.rust",
            settings: {
                foreground: peach,
            },
        },
        {
            name: "Rust function parameters",
            scope: ["meta.function.definition.rust variable.other.rust"],
            settings: {
                foreground: maroon,
            },
        },
        {
            name: "Rust closure variables",
            scope: "meta.function.call.rust variable.other.rust",
            settings: {
                foreground: text,
            },
        },
        {
            name: "Rust self",
            scope: "variable.language.self.rust",
            settings: {
                foreground: red,
            },
        },
        {
            name: "Rust metavariable names",
            scope: [
                "variable.other.metavariable.name.rust",
                "meta.macro.metavariable.rust keyword.operator.macro.dollar.rust",
            ],
            settings: {
                foreground: pink,
            },
        },
        {
            name: "Shell shebang",
            scope: [
                "comment.line.shebang",
                "comment.line.shebang punctuation.definition.comment",
                "comment.line.shebang",
                "punctuation.definition.comment.shebang.shell",
                "meta.shebang.shell",
            ],
            settings: {
                foreground: pink,
                fontStyle: "italic",
            },
        },
        {
            name: "Shell shebang command",
            scope: "comment.line.shebang constant.language",
            settings: {
                foreground: teal,
                fontStyle: "italic",
            },
        },
        {
            name: "Shell interpolated command",
            scope: [
                "meta.function-call.arguments.shell punctuation.definition.variable.shell",
                "meta.function-call.arguments.shell punctuation.section.interpolation",
                "meta.function-call.arguments.shell punctuation.definition.variable.shell",
                "meta.function-call.arguments.shell punctuation.section.interpolation",
            ],
            settings: {
                foreground: red,
            },
        },
        {
            name: "Shell interpolated command variable",
            scope: "meta.string meta.interpolation.parameter.shell variable.other.readwrite",
            settings: {
                foreground: peach,
                fontStyle: "italic",
            },
        },
        {
            scope: [
                "source.shell punctuation.section.interpolation",
                "punctuation.definition.evaluation.backticks.shell",
            ],
            settings: {
                foreground: teal,
            },
        },
        {
            name: "Shell EOF",
            scope: "entity.name.tag.heredoc.shell",
            settings: {
                foreground: mauve,
            },
        },
        {
            name: "Shell quoted variable",
            scope: "string.quoted.double.shell variable.other.normal.shell",
            settings: {
                foreground: text,
            },
        },
    ],
});
