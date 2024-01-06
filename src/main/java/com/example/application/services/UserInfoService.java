package com.example.application.services;

import com.example.application.UserInfo;
import com.sun.jna.platform.win32.Netapi32Util;
import dev.hilla.BrowserCallable;
import jakarta.annotation.security.PermitAll;
import lombok.NonNull;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.List;
import java.util.stream.Collectors;

@BrowserCallable
public class UserInfoService {

    @PermitAll
    @NonNull
    public UserInfo getUserInfo() {
        Authentication auth = SecurityContextHolder.getContext()
                .getAuthentication();

        final List<String> authorities = auth.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return new UserInfo(auth.getName(),authorities);
    }
}
