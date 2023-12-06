const sidebars = {
  tev2SideBar: [
    { type: 'category',
      label: 'TEv2 Overview',
      link: {type: 'doc', id: 'overview/overview-tev2'},
      items: [
        { type: 'autogenerated', dirName: 'overview' },
        { type: 'doc', label: 'Terminology Support', id: 'terms/patterns/pattern-terminology'},
      ]
    },
    { type: 'category',
      label: 'Manuals',
      link: {type: 'doc', id: 'manuals/man-overview'},
      items:
      [ { type: 'category',
        label: 'Authors',
        link: {type: 'doc', id: 'manuals/author/overview-author'},
        items: [ { type: 'autogenerated', dirName: 'manuals/author' } ]
        },
        { type: 'category',
        label: 'Curators',
        link: {type: 'doc', id: 'manuals/curator/overview-curator'},
        items: [ { type: 'autogenerated', dirName: 'manuals/curator' } ]
        },
        { type: 'category',
        label: 'Contributors',
        link: {type: 'doc', id: 'manuals/contributor/overview-contributor'},
        items: [ { type: 'autogenerated', dirName: 'manuals/contributor' } ]
        },
      ],
    },
    { type: 'category',
      label: 'Files (Structure, Specs)',
      link: {type: 'doc', id: 'spec-files/overview-spec-files'},
      items: [ { type: 'autogenerated', dirName: 'spec-files' } ]
    },
    { type: 'category',
      label: 'Syntax (Specs)',
      link: {type: 'doc', id: 'spec-syntax/overview-spec-syntax'},
      items: [ { type: 'autogenerated', dirName: 'spec-syntax' } ]
    },
    { type: 'category',
      label: 'The Toolbox (specs)',
      link: {type: 'doc', id: 'spec-tools/overview-spec-tools'},
      items: [ { type: 'autogenerated', dirName: 'spec-tools' } ]
    },
    { type: 'category',
      label: 'The Toolbox (envisaged)',
      link: {type: 'doc', id: 'spec-tools-envisaged/overview-spec-tools-envisaged'},
      items: [ { type: 'autogenerated', dirName: 'spec-tools-envisaged' } ]
    },
    { type: 'doc', id: 'tev2-glossary'},
    { type: 'doc', id: 'tev2-glossaries'},
    { type: 'category',
      label: 'Miscellanous',
      link: {type: 'doc', id: 'miscellaneous/overview-miscellaneous'},
      items: [ { type: 'autogenerated', dirName: 'miscellaneous' } ]
    },
  ],
};

module.exports = sidebars;
