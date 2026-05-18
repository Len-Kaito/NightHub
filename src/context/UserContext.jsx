import React, { createContext, useContext, useState, useEffect } from 'react';

export const AVATARS = [
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/9rdo8k24_asset24x.webp',
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/5k104vv9_asset34x.webp',
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/6qpy3mtk_asset44x.webp',
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/cy48bhoe_asset54x.webp',
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/7634rbqo_asset74x.webp',
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/qd2hhjm8_asset84x.webp',
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/9tn0n6qa_asset94x.webp'
];

const INITIAL_PROFILES = [
  { id: 1, name: "Nguyễn Văn A", avatarUrl: AVATARS[0], gender: "nam", isKids: false, pin: null }
];

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [profiles, setProfiles] = useState(() => {
        const saved = localStorage.getItem('nighthub_profiles');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Migration: đổi tên cũ thành tên mới
                const migrated = parsed.map(p =>
                    p.name === 'Nguyễn Hoàng Nam' ? { ...p, name: 'Nguyễn Văn A' } : p
                );
                return migrated;
            } catch (e) {
                return INITIAL_PROFILES;
            }
        }
        return INITIAL_PROFILES;
    });

    const [activeProfileId, setActiveProfileIdState] = useState(() => {
        const saved = localStorage.getItem('nighthub_active_profile_id');
        return saved ? parseInt(saved, 10) : INITIAL_PROFILES[0].id;
    });

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const saved = localStorage.getItem('nighthub_is_logged_in');
        return saved === 'true';
    });

    const [showSkipIntro, setShowSkipIntro] = useState(() => {
        const saved = localStorage.getItem('nighthub_skip_intro');
        return saved !== 'false'; // default true
    });

    const [autoPlayNext, setAutoPlayNext] = useState(() => {
        const saved = localStorage.getItem('nighthub_autoplay_next');
        return saved !== 'false'; // default true
    });

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem('nighthub_is_logged_in', 'true');
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('nighthub_is_logged_in', 'false');
    };

    // Backwards compatibility
    const [currentAvatar, setCurrentAvatarState] = useState(INITIAL_PROFILES[0].avatarUrl);

    useEffect(() => {
        localStorage.setItem('nighthub_profiles', JSON.stringify(profiles));
    }, [profiles]);

    useEffect(() => {
        localStorage.setItem('nighthub_active_profile_id', activeProfileId);
        const activeProfile = profiles.find(p => p.id === activeProfileId);
        if (activeProfile) {
            setCurrentAvatarState(activeProfile.avatarUrl);
            localStorage.setItem('nighthub_avatar', activeProfile.avatarUrl);
        }
    }, [activeProfileId, profiles]);

    const setAvatar = (url) => {
        // Backwards compatibility, also updates active profile
        setCurrentAvatarState(url);
        localStorage.setItem('nighthub_avatar', url);
        setProfiles(prev => prev.map(p => p.id === activeProfileId ? { ...p, avatarUrl: url } : p));
    };

    useEffect(() => {
        localStorage.setItem('nighthub_skip_intro', showSkipIntro);
    }, [showSkipIntro]);

    useEffect(() => {
        localStorage.setItem('nighthub_autoplay_next', autoPlayNext);
    }, [autoPlayNext]);

    const switchProfile = (id) => {
        const profile = profiles.find(p => p.id === id);
        if (profile) {
            setActiveProfileIdState(id);
        }
    };

    const addProfile = (profileData) => {
        setProfiles(prev => [...prev, profileData]);
    };

    const updateProfile = (id, updatedData) => {
        setProfiles(prev => prev.map(p => p.id === id ? { ...p, ...updatedData } : p));
    };

    const deleteProfile = (id) => {
        setProfiles(prev => prev.filter(p => p.id !== id));
        if (activeProfileId === id) {
            // Switch to first available profile if current is deleted
            const remaining = profiles.filter(p => p.id !== id);
            if (remaining.length > 0) {
                setActiveProfileIdState(remaining[0].id);
            }
        }
    };

    return (
        <UserContext.Provider value={{ 
            currentAvatar, setAvatar, // Backward compatibility
            profiles, activeProfileId, 
            switchProfile, addProfile, updateProfile, deleteProfile,
            isLoggedIn, login, logout,
            showSkipIntro, setShowSkipIntro,
            autoPlayNext, setAutoPlayNext
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('useUser must be used within a UserProvider');
    return context;
};
