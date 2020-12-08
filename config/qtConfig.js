const os = require('os');
const path = require('path');
const fs = require('fs');

const SETUP_DIR = path.resolve(__dirname, '..', 'miniqt');
const QT_VERSION = '5.14.1';

const checkIfExists = (fullPath) => {
    return () => fs.existsSync(fullPath);
};

function getMiniQtConfig() {
    switch (os.platform()) {
        case 'darwin': {
            const qtHome = path.resolve(SETUP_DIR, QT_VERSION, 'clang_64');
            return {
                qtHome,
                artifacts: [
                    {
                        name: 'Qt texttospeech',
                        link: `https://download.qt.io/online/qtsdkrepository/mac_x64/desktop/qt5_5141/qt.qt5.5141.clang_64/5.14.1-0-202001241000qtspeech-MacOS-MacOS_10_13-Clang-MacOS-MacOS_10_13-X86_64.7z`,
                        skipSetup: checkIfExists(
                            path.resolve(qtHome, 'lib', 'QtTextToSpeech.framework', 'QtTextToSpeech'),
                        ),
                    },
                ],
            };
        }
        case 'win32': {
            const qtHome = path.resolve(SETUP_DIR, QT_VERSION, 'msvc2017_64');
            return {
                qtHome,
                artifacts: [
                    {
                        name: 'Qt texttospeech',
                        link: `https://download.qt.io/online/qtsdkrepository/windows_x86/desktop/qt5_5141/qt.qt5.5141.win64_msvc2017_64/5.14.1-0-202001240957qtspeech-Windows-Windows_10-MSVC2017-Windows-Windows_10-X86_64.7z`,
                        skipSetup: checkIfExists(path.resolve(qtHome, 'lib', 'Qt5TextToSpeech.dll')),
                    },
                ],
            };
        }
        case 'linux': {
            const qtHome = path.resolve(SETUP_DIR, QT_VERSION, 'gcc_64');
            return {
                qtHome,
                artifacts: [
                    {
                        name: 'Qt texttospeech',
                        link: `https://download.qt.io/online/qtsdkrepository/linux_x64/desktop/qt5_5141/qt.qt5.5141.gcc_64/5.14.1-0-202001240953qtspeech-Linux-RHEL_7_6-GCC-Linux-RHEL_7_6-X86_64.7z`,
                        skipSetup: checkIfExists(path.resolve(qtHome, 'lib', 'libQt5TextToSpeech.so')),
                    },
                ],
            };
        }
    }
}

const miniQt = {
    ...getMiniQtConfig(),
    version: QT_VERSION,
    setupDir: SETUP_DIR,
};

const useCustomQt = Boolean(process.env.QT_INSTALL_DIR);
const qtHome = useCustomQt ? process.env.QT_INSTALL_DIR : miniQt.qtHome;
const qtCmakeDir = path.resolve(qtHome, 'lib', 'cmake', 'Qt5');

module.exports = {
    qtHome,
    miniQt,
    qtCmakeDir,
    useCustomQt,
};
