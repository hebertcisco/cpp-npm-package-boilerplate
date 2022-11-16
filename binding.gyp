{
    'conditions': [
        ['OS=="linux"', {
            'variables': {
                'NODE_ENV': 'development'
            }
        }, {
            'variables': {
                'NODE_ENV': 'development'
            },
        }]
    ],
    'targets': [
        {
            'target_name': 'addon',
            'sources': [
                'src/core/addon.cc'
            ],
            'include_dirs': [
                '<!(node -e "require(\'nan\')")'
            ],
            'conditions': [
                ['OS=="linux"', {
                    'cflags': ['-fvisibility=hidden']
                }],
                ['OS=="win"', {
                    'libraries': ['ws2_32.lib', 'secur32.lib', 'crypt32.lib'],
                    'msvs_settings': {
                        'VCLinkerTool': {
                            'AdditionalLibraryDirectories': []
                        },
                    }
                }, {  # OS!="win"
                    'libraries': [],
                    'ldflags': []
                }],
                ['OS=="mac"', {
                    'xcode_settings': {
                        'CLANG_CXX_LIBRARY': 'libc++',
                        'MACOSX_DEPLOYMENT_TARGET': '10.7'
                    }
                }]
            ]
        }
    ]
}
